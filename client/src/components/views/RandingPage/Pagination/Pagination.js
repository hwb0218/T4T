import React from "react";
import { PageUl, PageLi } from "./PaginationElements";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const totalPage = Math.ceil(totalProducts / productsPerPage);
  const pagesNumber = Array(totalPage)
    .fill(0)
    .map((x, i) => i + 1);

  const handlePrevBtn = () => {};
  const handleNextBtn = () => {};

  return (
    <PageUl>
      <PageLi onClick={handlePrevBtn}></PageLi>
      {pagesNumber.map((pageNum) => (
        <PageLi key={pageNum} onClick={() => paginate(pageNum)}>
          {pageNum}
        </PageLi>
      ))}
      <PageLi onClick={handleNextBtn}></PageLi>
    </PageUl>
  );
};

export default Pagination;
