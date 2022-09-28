import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawCardButton } from "./DrawCardButton";

describe("draw card tests", () => {
  it("renders draw card button", () => {
    expect.assertions(1);
    render(<DrawCardButton />);
    const button = screen.getByText("Draw card");
    expect(button).toBeInTheDocument();
  });

  it("draw button handles a click correctly", () => {
    let clicked = false;
    const drawCard = (event) => {
      clicked = true;
    };
    const { getByText } = render(<DrawCardButton drawCard={drawCard} />);
    const button = getByText("Draw card");
  
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(clicked).toBeTruthy();
  });

});
