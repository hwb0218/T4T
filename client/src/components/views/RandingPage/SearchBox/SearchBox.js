import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../../../../_actions/searchTermActions";
import {
  SearchBoxContainer,
  SearchBoxContent,
  SearchIcon,
  SearchBoxInput,
} from "./SearchBoxElements";

const SearchBox = ({ products, updateProducts }) => {
  const searchData = useSelector((state) => state.searchData);
  const dispatch = useDispatch();

  const handleSearchTerm = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const search = products.filter((product) =>
        product.description.includes(searchData)
      );
      updateProducts(search);
      dispatch(updateSearchTerm(""));
    }
  };

  return (
    <SearchBoxContainer>
      <SearchBoxContent>
        <SearchIcon />
        <SearchBoxInput
          type="text"
          value={searchData}
          onChange={handleSearchTerm}
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
      </SearchBoxContent>
    </SearchBoxContainer>
  );
};

export default SearchBox;
