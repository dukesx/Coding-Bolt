// import React from "react";
import { render } from "@testing-library/react";
import Index from "../../pages/index";
import "@testing-library/jest-dom";

describe("Index Page", () => {
  test("Wrapper Is Rendered", async () => {
    const { findByTestId } = render(<Index />);
    const element = await findByTestId("wrapper");
    expect(element).toBeInTheDocument();
  });
});
