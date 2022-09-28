import React from "react"
import { render, screen} from "@testing-library/react";
import {MatchDisplay} from "./MatchDisplay";

describe("match display tests", () => {
it("displays the final value and suit totals correctly", () => {
  const { getByText } = render(
    <MatchDisplay matchType={"SUIT"}/>
  );

  expect(getByText('SNAP SUIT!')).toBeTruthy();
})

});