import React from "react";
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
  queryPage,
}) => {
  const totalPage = Math.ceil(totalProducts / productsPerPage);
  const pagesNumber = Array(totalPage)
    .fill(0)
    .map((x, i) => i + 1);

  const pageNumberLimit = 3;
  const groupNumber = Math.trunc((queryPage - 1) / pageNumberLimit);
  const prevGroup = groupNumber + groupNumber * 2;
  const nextGroup = (groupNumber + 1) * pageNumberLimit;

  const handlePrevGroupBtn = () => {
    paginate(prevGroup);
  };

  const handleNextGroupBtn = () => {
    paginate(nextGroup + 1);
  };

  const renderPageNumbers = pagesNumber.map((pageNum, i) => {
    if (Math.trunc(i / pageNumberLimit) === groupNumber) {
      return (
        <PageLi key={pageNum}>
          <PageLink
            to={`/?page=${pageNum}`}
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
      {groupNumber >= 1 ? (
        <PageLi>
          <PageLink to={`/?page=${prevGroup}`} onClick={handlePrevGroupBtn}>
            <PrevBtn />
          </PageLink>
        </PageLi>
      ) : null}
      {renderPageNumbers}
      {pagesNumber.length > nextGroup ? (
        <PageLi>
          <PageLink to={`/?page=${nextGroup + 1}`} onClick={handleNextGroupBtn}>
            <NextBtn />
          </PageLink>
        </PageLi>
      ) : null}
    </PageUl>
  );
};

export default withRouter(Pagination);
