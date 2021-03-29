import React from "react";
import { sliderImages } from "./sliderImages";
import { Img } from "./CarouselSlideElements";

const Slide = () => {
  return (
    <>
      {sliderImages.map((city, id) => (
        <Img src={city} key={id} />
      ))}
    </>
  );
};

export default Slide;
