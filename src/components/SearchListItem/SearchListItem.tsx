import React from 'react';
import './SearchListItem.scss';

interface SearchListItemInterface {
    name: string,
    image: string,
    ingredients: string[]
}

export const SearchListItem: React.FC<SearchListItemInterface> = ({ name, image, ingredients }) => (
  <li className="search-list__item">
    <figure className="search-list__item-figure">
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
    <ul className="search-list__item-ingredients">
      {ingredients.map((ingredient) => (
        <li key={`${name}_${ingredient}`}>{ingredient}</li>
      ))}
    </ul>
  </li>
);
