import React, { useState } from "react";
import {
  SearchBoxContainer,
  SearchBoxContent,
  SearchIcon,
  SearchBoxInput,
} from "./SearchBoxElements";

const SearchBox = () => {
  const [q, setQ] = useState("");
  return (
    <SearchBoxContainer>
      <SearchBoxContent>
        <SearchIcon />
        <SearchBoxInput
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
        />
      </SearchBoxContent>
    </SearchBoxContainer>
  );
};

export default SearchBox;
