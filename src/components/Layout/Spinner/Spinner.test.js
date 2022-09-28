import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner } from "./Spinner";

describe("spinner tests", () => {
  it("renders a spinner", () => {
    expect.assertions(1);
    render(<Spinner />);
    const container = screen.getByRole('spinner')
    expect(container).toBeInTheDocument();
  });
});
