import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  SliderContainer,
} from "./CarouselSlideElements";
import Slide from "./Slide";
import Circles from "./Circles";

const CarouselSlide = () => {
  const [direction, setDirection] = useState("");
  const [currentSlide, setCurrentSlide] = useState(1);

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
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0);
    debounce(() => {
      if (currentSlide === 1) {
        setTimeout(() => {
          setCurrentSlide(5);
        }, 490);
      }
    }, 0);
  };

  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrentSlide(currentSlide < 5 ? currentSlide + 1 : 6);
    debounce(() => {
      if (currentSlide === 5) {
        setTimeout(() => {
          setCurrentSlide(1);
        }, 490);
      }
    }, 0);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const clickDot = (clickDot) => {
    setDirection("");
    setCurrentSlide(clickDot);
  };

  return (
    <Container>
      <SliderContainer direction={direction} currentSlide={currentSlide}>
        <Slide />
      </SliderContainer>
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
      <Circles currentSlide={currentSlide} clickDot={clickDot} />
    </Container>
  );
};

export default CarouselSlide;
