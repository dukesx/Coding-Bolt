// import React from "react";
import { render } from "@testing-library/react";
import Signin from "../../pages/signin";
import "@testing-library/jest-dom";

describe("Sign In Page", () => {
  test("Grid Is Rendered", async () => {
    const { findByTestId } = render(<Signin />);
    const element = await findByTestId("signin-grid");
    expect(element).toBeInTheDocument();
  });
});
