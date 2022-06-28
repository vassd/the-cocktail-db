import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchListItem } from "components";
import { mockSearchListItemData } from "tests/fixtures";

describe("<SearchListItem>", () => {
  const { name, imageSrc, ingredients } = mockSearchListItemData;
  it("should render correctly", () => {
    const { container } = render(
      <SearchListItem
        name={name}
        imageSrc={imageSrc}
        ingredients={ingredients}
      />
    );

    expect(screen.getByRole("img").getAttribute("src")).toBe(imageSrc);
    expect(screen.getByRole("img").getAttribute("alt")).toBe(name);
    expect(container.getElementsByTagName("figcaption")[0].textContent).toBe(
      name
    );

    const containerIngredients = screen.getByRole("list").children;

    expect(containerIngredients.length).toBe(ingredients.length);

    ingredients.forEach((ingredient, index) => {
      expect(containerIngredients[index].textContent).toBe(ingredient);
    });
  });

  it("should render correctly with not valid image URL", () => {
    render(
      <SearchListItem
        name={name}
        imageSrc={imageSrc}
        ingredients={ingredients}
      />
    );

    const image = screen.getByRole("img");

    fireEvent.error(image);
    expect(image.getAttribute("src")).toBe("/not-found.png");
  });
});
