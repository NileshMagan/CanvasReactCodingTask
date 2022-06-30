import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Renders the heading", () => {
    render(<App />);
    const heading = screen.getByText(/See-Mode Front-End Tech Task/);
    expect(heading).toBeInTheDocument();
  });
});
