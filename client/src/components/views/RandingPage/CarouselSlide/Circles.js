import React from "react";
import sliderImages from "./sliderImages";
import { Circle } from "./CarouselSlideElements";

const Circles = ({ currentSlide }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        left: "50%",
        bottom: 0,
        transform: "translate(-50%, -50%)",
      }}
      onClick={(e) => console.log(e.target)}
    >
      {sliderImages.map(({ id }) => (
        <Circle active={currentSlide === id} key={id}></Circle>
      ))}
    </div>
  );
};

export default Circles;
