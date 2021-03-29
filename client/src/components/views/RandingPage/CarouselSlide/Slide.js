import React, { useEffect, useRef } from "react";
import sliderImages from "./sliderImages";
import { Img } from "./CarouselSlideElements";

const Slide = () => {
  return (
    <>
      {sliderImages.map((img, i) => (
        <Img src={img} key={i} />
      ))}
    </>
  );
};

export default Slide;
