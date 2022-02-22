import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

const textButton = "Generate Quote";

test("renders button with text", () => {
  render(<Button>{ textButton }</Button>);

  const buttonEl = screen.getByText(textButton);

  expect(buttonEl).toBeInTheDocument();
})
