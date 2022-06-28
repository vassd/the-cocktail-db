import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchList } from "components";
import { mockSearchListData } from "tests/fixtures";

describe("<SearchList>", () => {
  it("should render correctly", () => {
    render(<SearchList data={mockSearchListData} />);

    expect(screen.getByText("Gin Fizz")).toBeInTheDocument();
  });

  it("should render correctly with empty data", () => {
    render(<SearchList data={[]} />);

    expect(screen.queryByText("Gin Fizz")).not.toBeInTheDocument();
  });
});
