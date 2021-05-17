import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateSearchTerm } from "../../../../_actions/searchTermActions";
import {
  SearchBoxContainer,
  SearchBoxContent,
  SearchIcon,
  SearchBoxInput,
  ClearSearchBtn,
} from "./SearchBoxElements";

const SearchBox = ({ products, updateProducts, paginate, history }) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  const handleSearchTerm = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  const onClickSearchIcon = () => {
    if (searchData === "" || searchData === " ") {
      alert("텍스트를 입력하세요.");
      return;
    }

    const search = products.filter((product) =>
      product.title.includes(searchData)
    );

    if (search.length === 0) {
      alert("검색 결과가 없습니다.");
      return;
    }
    updateProducts(search);
    paginate(1);
    dispatch(updateSearchTerm(""));
    history.push("/");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearchIcon();
    }
  };

  const handleClearSearchBtn = () => {
    updateProducts(products);
  };

  return (
    <SearchBoxContainer>
      <SearchBoxContent>
        <ClearSearchBtn onClick={handleClearSearchBtn}>
          검색 초기화
        </ClearSearchBtn>
        <SearchIcon onClick={onClickSearchIcon} />
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

export default withRouter(SearchBox);
