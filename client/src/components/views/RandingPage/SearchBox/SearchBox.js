import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchData } from "../../../../_actions/searchDataActions";
import {
  SearchBoxContainer,
  SearchBoxContent,
  SearchIcon,
  SearchBoxInput,
} from "./SearchBoxElements";

const SearchBox = ({ products, updateProducts }) => {
  const searchData = useSelector((state) => state.searchData);
  const dispatch = useDispatch();

  const handleSearchData = (e) => {
    dispatch(updateSearchData(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const search = products.filter((product) =>
        product.description.includes(searchData)
      );
      updateProducts(search);
      dispatch(updateSearchData(""));
    }
  };

  return (
    <SearchBoxContainer>
      <SearchBoxContent>
        <SearchIcon />
        <SearchBoxInput
          type="text"
          value={searchData}
          onChange={handleSearchData}
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
      </SearchBoxContent>
    </SearchBoxContainer>
  );
};

export default SearchBox;
