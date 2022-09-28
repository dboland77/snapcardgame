import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardTable } from "./CardTable";

describe("card table tests", () => {
  it("renders card table container", () => {
    expect.assertions(1);
    render(<CardTable />);
    const container = screen.getByTestId('card-table')
    expect(container).toBeInTheDocument();
  });
});
