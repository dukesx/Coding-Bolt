import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Index from "pages/index";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<Index />);
  expect(getByText("Hello World")).toBeInTheDocument();
});
