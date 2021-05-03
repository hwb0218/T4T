import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const EmptyStar = styled(BsStar)`
  color: blueviolet;
`;

const Rating = ({ value }) => {
  const getStar = (value) => {
    switch (value) {
      case 0:
        return <EmptyStar />;
      case 50:
        return <BsStarHalf />;
      case 100:
        return <BsStarFill />;
    }
  };
  return <div>{getStar(0)}</div>;
};

export default Rating;
