import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("content container tests", () => {
  it("renders content container", () => {
    expect.assertions(1);
    render(<Header />);
    const contentContainer = screen.getByRole("header");
    expect(contentContainer).toBeInTheDocument();
  });
});
