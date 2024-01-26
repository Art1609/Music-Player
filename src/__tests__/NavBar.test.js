import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar/NavBar";

test("NavBar render test", () => {
  render(<NavBar />);
  const element = screen.screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
});
