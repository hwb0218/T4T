import React from "react";
import { Stars, Full, Empty } from "./RatingElements";

const getStarts = (value) => {
  const stars = [];
  const rating = Math.floor(value);

  for (let i = 0; i < rating; i++) {
    stars.push(<Full />);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<Empty />);
  }
  return stars;
};

const Rating = ({ value }) => {
  return (
    <Stars>
      {getStarts(value).map((value) => (
        <>{value}</>
      ))}
    </Stars>
  );
};

export default Rating;
