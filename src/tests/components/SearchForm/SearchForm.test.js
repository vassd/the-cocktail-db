import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchForm } from "components";

describe("<SearchForm>", () => {
  it("should render correctly", () => {
    render(<SearchForm />);

    expect(screen.getByText("Find a cocktail by name")).toBeInTheDocument();
  });

  it("should call onSubmit", () => {
    const onSubmitMock = jest.fn();
    const testInput = "fizz";
    render(<SearchForm onSubmit={onSubmitMock} />);

    const input = screen.getByRole("searchbox", {
      name: "Find a cocktail by name",
    });

    fireEvent.change(input, { target: { value: testInput } });
    expect(input.value).toBe(testInput);

    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.click(button);
    expect(onSubmitMock).toBeCalledWith(testInput);
  });
});
