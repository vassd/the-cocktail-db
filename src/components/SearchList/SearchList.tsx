import React from 'react';

interface SearchListInterface {
    data: Object[]
}

export const SearchList: React.FC<SearchListInterface> = ({ data }) => {
  const getIngredients = (drink: { [key: string]: any }) => Object.keys(drink)
    .filter((k) => k.includes('strIngredient') && drink[k])
    .reduce((res: string[], i) => {
      const measure = drink[`strMeasure${i.match(/\d/g)?.join('')}`];
      res.push(`${measure || ''}${drink[i]}`);

      return res;
    }, []);

  const preformatData = (drinks: Object[]) => drinks?.reduce((arr: Object[], cur: { [key: string]: any }) => {
    arr.push({
      name: cur.strDrink,
      image: cur.strDrinkThumb,
      ingredients: getIngredients(cur),
    });

    return arr;
  }, []);

  return (
    null
  );
};
