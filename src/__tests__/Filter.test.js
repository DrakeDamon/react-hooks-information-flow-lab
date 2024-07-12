import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  render(<Filter />);
  expect(screen.queryByRole("combobox")).toBeInTheDocument();
});

test("calls the handleCategoryChange callback prop when the <select> is changed", () => {
  const handleCategoryChange = jest.fn();
  render(<Filter handleCategoryChange={handleCategoryChange} />);

  fireEvent.change(screen.queryByRole("combobox"), {
    target: { value: "Dairy" },
  });
  expect(handleCategoryChange).toHaveBeenCalled();
  expect(handleCategoryChange).toHaveBeenCalledWith("Dairy");
});
