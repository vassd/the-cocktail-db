import React from 'react';
import './SearchList.scss';
import { SearchListItem } from 'components';

interface SearchListInterface {
    data: Object[]
}

export const SearchList: React.FC<SearchListInterface> = ({ data }) => {
  const getIngredients = (drink: { [key: string]: any }) => Object.keys(drink)
    .reduce((ingredients: string[], key) => {
      if (key.includes('strIngredient') && drink[key]) {
        const measure = drink[`strMeasure${key.match(/\d/g)?.join('')}`];
        ingredients.push(`${measure || ''}${drink[key]}`);
      }

      return ingredients;
    }, []);

  const preformatData = (drinks: Object[]) => drinks?.reduce((formattedDrinks: Object[], drink: { [key: string]: any }) => {
    formattedDrinks.push({
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      ingredients: getIngredients(drink),
    });

    return formattedDrinks;
  }, []);

  return (
    <ul className="search-list">
      {preformatData(data)?.map((drink: { [key: string]: any }) => (
        <SearchListItem
          key={drink.name}
          name={drink.name}
          imageSrc={drink.image}
          ingredients={drink.ingredients}
        />
      ))}
    </ul>
  );
};
