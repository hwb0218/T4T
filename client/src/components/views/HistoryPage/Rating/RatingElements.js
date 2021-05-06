import React from "react";
import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

export const Star = styled(({ hoverRating, rating, value, ...rest }) => (
  <BsStarFill {...rest} />
))`
  color: ${({ hoverRating, value }) =>
    hoverRating >= value ? "orange" : "#dcdcdc"};

  color: ${({ hoverRating, rating, value }) =>
    !hoverRating && rating >= value && "orange"};

  font-size: 2.8rem;
  cursor: pointer;

  & + & {
    padding-left: 1px;
  }
`;
