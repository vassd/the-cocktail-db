import React, { useRef } from "react";
import styles from "./SearchForm.module.scss";

interface SearchFormInterface {
  onSubmit(name: string | undefined): void;
}

export const SearchForm: React.FC<SearchFormInterface> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    onSubmit(inputRef.current?.value);
  };

  return (
    <form className={styles["search-form"]}>
      <label className={styles["search-form__label"]} htmlFor="search">
        Find a cocktail by name
        <input
          className={styles["search-form__input"]}
          id="search"
          name="search"
          type="search"
          ref={inputRef}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};
