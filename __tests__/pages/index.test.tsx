// import React from "react";
import { render } from "@testing-library/react";
import Index from "../../pages/index";
import "@testing-library/jest-dom";

describe("Index Page", () => {
  test("Is Working", async () => {
    const { findByText } = render(<Index />);
    const element = await findByText("Hmmmmm....What are you waiting for ?");
    expect(element).toBeInTheDocument();
  });
});
