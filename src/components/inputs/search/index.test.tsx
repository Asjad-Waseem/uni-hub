import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./index";

jest.mock("constants", () => ({
  UI_LABELS: {
    typeToSearch: "Type here to search...",
  },
}));

describe("SearchBar Component", () => {
  it("renders the search input correctly with an empty value initially", () => {
    render(
      <SearchBar
        searchValue=""
        handleChange={() => {}}
        toggleSearch={() => {}}
        isActive={true}
      />
    );
    // Use 'as HTMLInputElement' to assert the correct type
    const searchInput = screen.getByPlaceholderText(
      "Type here to search..."
    ) as HTMLInputElement;
    expect(searchInput.value).toBe("");
  });

  it("allows input to be entered in the search field", () => {
    const handleChange = jest.fn();
    render(
      <SearchBar
        searchValue="Hello"
        handleChange={handleChange}
        toggleSearch={() => {}}
        isActive={true}
      />
    );
    // Again, assert the element as HTMLInputElement
    const searchInput = screen.getByPlaceholderText(
      "Type here to search..."
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "New Input" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("calls the toggle search function when the toggle button is clicked", () => {
    const toggleSearch = jest.fn();
    render(
      <SearchBar
        searchValue=""
        handleChange={() => {}}
        toggleSearch={toggleSearch}
        isActive={true}
      />
    );
    // Use data-testid to select the button
    const toggleButton = screen.getByTestId("toggle-search-button");
    fireEvent.click(toggleButton);
    expect(toggleSearch).toHaveBeenCalled();
  });
});
