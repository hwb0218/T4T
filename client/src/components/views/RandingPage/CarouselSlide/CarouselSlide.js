import React, { useState } from "react";
import img1 from "../../../../images/seoul2.jpg";
import img2 from "../../../../images/jeju1.jpg";
import img3 from "../../../../images/jeonju.png";
import img4 from "../../../../images/busan.png";
import img5 from "../../../../images/kangnung.jpg";
import { Container, SliderContainer } from "./CarouselSlideElements";
import Slide from "./Slide";
import Arrow from "./Arrow";

const CarouselSlide = () => {
  const [images, setImages] = useState([img5, img1, img2, img3, img4]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const onArrowClick = (direction) => {
    if (direction === "right") {
      setCurrentSlide(2);
      setTimeout(() => {
        const nextImage = images.slice(1);
        setImages([...nextImage, images[0]]);
        setCurrentSlide(1);
      }, 350);
    }
    if (direction === "left") {
      setCurrentSlide(0);
      setTimeout(() => {
        const prevImage = images.slice(0, images.length - 1);
        setImages([images[images.length - 1], ...prevImage]);
        setCurrentSlide(1);
      }, 350);
    }
  };

  return (
    <Container>
      <SliderContainer currentSlide={currentSlide}>
        <Slide images={images} />
      </SliderContainer>
      <Arrow direction="left" clickFunction={onArrowClick} />
      <Arrow direction="right" clickFunction={onArrowClick} />
    </Container>
  );
};

export default CarouselSlide;
