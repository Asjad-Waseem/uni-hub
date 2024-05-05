import "assets/styles/components/Searchbar.css";

import { SearchBarProps } from "./types";
import { UI_LABELS } from "constants";

const SearchBar = ({
  searchValue,
  handleChange,
  toggleSearch,
  isActive,
}: SearchBarProps): JSX.Element => {
  const { typeToSearch } = UI_LABELS;
  return (
    <div className={`search-wrapper ${isActive ? "active" : ""}`}>
      <div className="input-holder">
        <input
          data-testid="search-input"
          type="text"
          className="search-input"
          placeholder={typeToSearch}
          value={searchValue}
          onChange={handleChange}
        />
        <button
          data-testid="toggle-search-button"
          className="search-icon"
          onClick={toggleSearch}
        >
          <span></span>
        </button>
      </div>
      <span
        data-testid="close-search-button"
        className="close"
        onClick={toggleSearch}
      ></span>
    </div>
  );
};

export default SearchBar;
