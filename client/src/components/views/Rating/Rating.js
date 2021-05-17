import React, { Fragment } from "react";
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

const Rating = ({ value, card }) => {
  return (
    <Stars card={card}>
      {getStarts(value).map((value, i) => (
        <Fragment key={i}>{value}</Fragment>
      ))}
    </Stars>
  );
};

export default Rating;
