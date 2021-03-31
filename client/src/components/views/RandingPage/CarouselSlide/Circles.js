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
        bottom: "-12px",
        transform: "translate(-50%, -50%)",
        background: "rgba(0, 0, 0, 0.3)",
        padding: "5px 5px",
        borderRadius: "25px",
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
