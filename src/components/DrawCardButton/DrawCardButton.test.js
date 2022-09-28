import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawCardButton } from "./DrawCardButton";

describe("draw card tests", () => {
  it("renders draw card button", () => {
    expect.assertions(1);
    render(<DrawCardButton />);
    const container = screen.getByText("Draw card");
    expect(container).toBeInTheDocument();
  });
});
