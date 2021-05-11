import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Star } from "./RatingElements";

const Rating = ({ onRating }) => {
  const { rating } = useSelector((state) => state.review);

  const [hoverRating, setHoverRating] = useState(0);

  const starRating = useMemo(() => {
    return Array(5)
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
  }, [rating, hoverRating, onRating]);

  return <div>{starRating}</div>;
};

export default Rating;
