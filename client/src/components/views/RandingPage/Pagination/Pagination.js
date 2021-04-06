import React, { useState } from "react";
import { PageUl, PageLi, PrevBtn, NextBtn } from "./PaginationElements";

const Pagination = ({
  currentPage,
  productsPerPage,
  totalProducts,
  paginate,
}) => {
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const totalPage = Math.ceil(totalProducts / productsPerPage);
  const pagesNumber = Array(totalPage)
    .fill(0)
    .map((x, i) => i + 1);

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
        <PageLi
          key={pageNum}
          id={pageNum}
          active={pageNum === currentPage}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
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

export default Pagination;
