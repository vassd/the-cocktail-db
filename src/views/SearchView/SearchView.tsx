import React, { useState } from "react";
import { SearchForm, SearchList } from "components";

export const SearchView: React.FC = () => {
  const [drink, setDrink] = useState("");
  const [drinks, setDrinks] = useState({});

  const handleSubmit = async (name: string) => {
    if (!drinks.hasOwnProperty(name)) {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      )
        .then((response) => response.json())
        .catch((error) => alert(error))
        .then((res) => res);

      if (data?.drinks) {
        setDrinks((prevState) => {
          const newState: { [index: string]: Object[] } = Object.assign(
            prevState,
            {}
          );
          newState[name] = data.drinks.slice(0, 5);

          return newState;
        });
      }
    }
    setDrink(name);
  };

  return (
    <section>
      <SearchForm onSubmit={handleSubmit} />
      <SearchList data={drinks[drink as keyof typeof drinks]} />
    </section>
  );
};
