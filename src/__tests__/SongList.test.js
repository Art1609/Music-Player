import { render, screen } from "@testing-library/react";
import SongList from "../components/SongList/SongList";

test("Testing song list render", () => {
  render(<SongList />);
  const list = screen.getByRole("table");
  expect(list).toBeInTheDocument();
});
