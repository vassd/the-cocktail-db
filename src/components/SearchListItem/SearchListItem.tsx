import React from "react";
import "./SearchListItem.scss";

interface SearchListItemInterface {
  name: string;
  imageSrc: string;
  ingredients: string[];
}

export const SearchListItem: React.FC<SearchListItemInterface> = ({
  name,
  imageSrc,
  ingredients,
}) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = `${process.env.PUBLIC_URL}/not-found.png`;
  };

  return (
    <li className="search-list__item">
      <figure className="search-list__item-figure">
        <img src={imageSrc} alt={name} onError={handleImageError} />
        <figcaption>{name}</figcaption>
      </figure>
      <ul className="search-list__item-ingredients">
        {ingredients.map((ingredient) => (
          <li key={`${name}_${ingredient}`}>{ingredient}</li>
        ))}
      </ul>
    </li>
  );
};
