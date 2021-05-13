import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PageUl,
  PageLi,
  PageLink,
  PrevBtn,
  NextBtn,
} from "./PaginationElements";
import { withRouter } from "react-router-dom";
import { minMaxPageNumberLimit } from "../../../../_actions/paginationActions";
import queryString from "query-string";

const Pagination = ({
  currentPage,
  productsPerPage,
  totalProducts,
  paginate,
  match,
}) => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination);
  const {
    minPageNumberLimit,
    maxPageNumberLimit,
    pageNumberLimit,
  } = pagination;

  const totalPage = Math.ceil(totalProducts / productsPerPage);
  const pagesNumber = Array(totalPage)
    .fill(0)
    .map((x, i) => i + 1);

  const handlePrevGroupBtn = () => {
    paginate(maxPageNumberLimit - minPageNumberLimit);
    dispatch(
      minMaxPageNumberLimit(
        "maxPageNumberLimit",
        maxPageNumberLimit - pageNumberLimit
      )
    );
    dispatch(
      minMaxPageNumberLimit(
        "minPageNumberLimit",
        minPageNumberLimit - pageNumberLimit
      )
    );
  };

  const handleNextGroupBtn = () => {
    paginate(maxPageNumberLimit + 1);
    dispatch(
      minMaxPageNumberLimit(
        "maxPageNumberLimit",
        maxPageNumberLimit + pageNumberLimit
      )
    );
    dispatch(
      minMaxPageNumberLimit(
        "minPageNumberLimit",
        minPageNumberLimit + pageNumberLimit
      )
    );
  };

  const renderPageNumbers = pagesNumber.map((pageNum) => {
    if (pageNum < maxPageNumberLimit + 1 && pageNum > minPageNumberLimit) {
      return (
        <PageLi key={pageNum}>
          <PageLink
            to={`${match.url}?page=${pageNum}`}
            onClick={() => paginate(pageNum)}
            $active={pageNum === currentPage}
          >
            {pageNum}
          </PageLink>
        </PageLi>
      );
    }
  });

  return (
    <PageUl>
      {minPageNumberLimit >= 1 ? (
        <PageLi>
          <PageLink
            to={`${match.url}?page=${minPageNumberLimit}`}
            onClick={handlePrevGroupBtn}
          >
            <PrevBtn />
          </PageLink>
        </PageLi>
      ) : (
        ""
      )}
      {renderPageNumbers}
      {pagesNumber.length > maxPageNumberLimit ? (
        <PageLi>
          <PageLink
            to={`${match.url}?page=${maxPageNumberLimit + 1}`}
            onClick={handleNextGroupBtn}
          >
            <NextBtn />
          </PageLink>
        </PageLi>
      ) : (
        ""
      )}
    </PageUl>
  );
};

export default withRouter(Pagination);
