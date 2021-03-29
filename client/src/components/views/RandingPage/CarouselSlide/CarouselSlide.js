import React, { useEffect, useRef, useState } from "react";
import sliderImages from "./sliderImages";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  SliderContainer,
} from "./CarouselSlideElements";
import Slide from "./Slide";
import Circles from "./Circles";

const len = sliderImages.length;

const CarouselSlide = () => {
  const sliderRef = useRef();
  const [direction, setDirection] = useState("");
  const [currentSlide, setCurrentSlide] = useState(1);
  console.log(currentSlide);

  useEffect(() => {
    const firstClone = sliderRef.current.firstElementChild.cloneNode(true);
    const lastClone = sliderRef.current.lastElementChild.cloneNode(true);
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";
  });

  const debounce = (fn, delay) => {
    let timer;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };

  const prevSlide = () => {
    setDirection("left");
    debounce(() => {
      setCurrentSlide(currentSlide === 0 ? 5 : currentSlide - 1);
    }, 300);
    if (currentSlide === 1) {
      setTimeout(() => {
        setCurrentSlide(5);
      }, 580);
    }
  };

  const nextSlide = () => {
    setDirection("right");
    debounce(() => {
      setCurrentSlide(currentSlide === len - 1 ? 1 : currentSlide + 1);
    }, 300);
    if (currentSlide === 5) {
      setTimeout(() => {
        setCurrentSlide(1);
      }, 580);
    }
  };

  return (
    <Container>
      <SliderContainer
        direction={direction}
        currentSlide={currentSlide}
        ref={sliderRef}
      >
        <Slide />
      </SliderContainer>
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
      {/*<Circles currentSlide={currentSlide} clickDot={clickDot} />*/}
    </Container>
  );
};

export default CarouselSlide;
