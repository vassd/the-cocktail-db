import React from "react";
import { SearchListItem } from "components";
import styles from "./SearchList.module.scss";

interface SearchListInterface {
  data: Object[];
}

export const SearchList: React.FC<SearchListInterface> = ({ data }) => {
  const getIngredients = (drink: { [key: string]: any }) =>
    Object.keys(drink).reduce((ingredients: string[], key) => {
      if (key.includes("strIngredient") && drink[key]) {
        const measure = drink[`strMeasure${key.match(/\d/g)?.join("")}`];
        ingredients.push(`${measure || ""}${drink[key]}`);
      }

      return ingredients;
    }, []);

  return (
    <ul className={styles["search-list"]}>
      {data?.map((drink: { [key: string]: any }) => (
        <SearchListItem
          key={drink.strDrink}
          name={drink.strDrink}
          imageSrc={drink.strDrinkThumb}
          ingredients={getIngredients(drink)}
        />
      ))}
    </ul>
  );
};
