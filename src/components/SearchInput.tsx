import React from "react";
import SearchIcon from "./icons/SearchIcon";

import "./SearchInput.scss";

type SearchInputProps = {
  onSearch?: (searchString: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <div className="input_container">
      <SearchIcon />
      <input
        className="field"
        onChange={(e) => {
          onSearch && onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
