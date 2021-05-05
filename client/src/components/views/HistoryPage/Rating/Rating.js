import React, { useState, useMemo } from "react";
import { BsStarFill } from "react-icons/bs";
import styled, { css } from "styled-components";

const Star = styled(({ hoverRating, rating, value, ...rest }) => (
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

const Rating = ({ count, rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((value) => (
        <Star
          key={value}
          value={value}
          onClick={() => onRating(value)}
          rating={rating}
          hoverRating={hoverRating}
          onMouseEnter={() => setHoverRating(value)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rating.defaultProps = {
  count: 5,
  rating: 0,
};

export default Rating;
