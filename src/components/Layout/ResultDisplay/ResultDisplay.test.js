import { render, screen} from "@testing-library/react";
import {ResultDisplay} from "./ResultDisplay";

describe('final result display tests', () => {
it("displays the final value and suit totals correctly", () => {
  const {getByText} = render(
    <ResultDisplay
        valueMatches = {18}
        suitMatches = {21}
    />
  );
  expect(getByText(/VALUE MATCHES : 18/i)).toBeTruthy();
  expect(getByText(/SUIT MATCHES : 21/i)).toBeTruthy();
})

})