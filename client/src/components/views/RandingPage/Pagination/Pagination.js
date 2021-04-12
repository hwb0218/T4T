import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PageUl,
  PageLi,
  PageLink,
  PrevBtn,
  NextBtn,
} from "./PaginationElements";
import { withRouter } from "react-router-dom";

const Pagination = ({
  currentPage,
  productsPerPage,
  totalProducts,
  paginate,
  match,
}) => {
  const filters = useSelector((state) => state.filters);

  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const totalPage = Math.ceil(totalProducts / productsPerPage);
  const pagesNumber = Array(totalPage)
    .fill(0)
    .map((x, i) => i + 1);

  useEffect(() => {
    setMinPageNumberLimit(0);
    setMaxPageNumberLimit(pageNumberLimit);
  }, [filters]);

  const handlePrevBtn = () => {
    if (currentPage === 1) return;
    paginate(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handlePrevGroupBtn = () => {
    paginate(maxPageNumberLimit - minPageNumberLimit);
    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  };

  const handleNextBtn = () => {
    if (currentPage === pagesNumber[pagesNumber.length - 1]) return;
    paginate(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleNextGroupBtn = () => {
    paginate(maxPageNumberLimit + 1);
    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
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
        <PageLi onClick={handlePrevGroupBtn}>&hellip;</PageLi>
      ) : (
        ""
      )}
      <PageLi onClick={handlePrevBtn}>
        <PrevBtn />
      </PageLi>
      {renderPageNumbers}
      <PageLi onClick={handleNextBtn}>
        <NextBtn />
      </PageLi>
      {pagesNumber.length > maxPageNumberLimit ? (
        <PageLi onClick={handleNextGroupBtn}> &hellip;</PageLi>
      ) : (
        ""
      )}
    </PageUl>
  );
};

export default withRouter(Pagination);
