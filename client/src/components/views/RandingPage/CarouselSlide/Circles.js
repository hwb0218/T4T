import React from "react";
import { sliderImages } from "./sliderImages";
import { Circle } from "./CarouselSlideElements";

const Circles = ({ currentSlide, clickDot }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        left: "50%",
        bottom: -5,
        transform: "translate(-50%, -50%)",
      }}
    >
      {sliderImages.map((x, i) => (
        <Circle
          onClick={() => clickDot(i)}
          active={currentSlide === i}
          key={i}
        />
      ))}
    </div>
  );
};

export default Circles;
