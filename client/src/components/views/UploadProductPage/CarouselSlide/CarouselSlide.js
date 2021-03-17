import React, { useState, useEffect } from 'react';
import Slide from "./Slide";
import { Container, SliderContainer } from "./CarouselSlideElements";
import Arrow from './Arrow';
import img1 from '../../../../images/empty-image.png';
import img2 from '../../../../images/prototype.png';
import img3 from '../../../../images/prototype.png';

const CarouselSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [img1, img2, img3];
    const numSlides = images.length;

    const onArrowClick = (direction) => {
        const increment = (direction === 'left' ? -1 : 1);
        const nextSlide = (currentSlide + increment + numSlides) % numSlides;
        setCurrentSlide(nextSlide);
    }

    useEffect(() => {
    }, [currentSlide]);

    return (
        <Container>
            {currentSlide}
            <SliderContainer currentSlide={currentSlide}>
                <Slide images={images} />
            </SliderContainer>
            <Arrow direction='left' clickFunction={onArrowClick} />
            <Arrow direction='right' clickFunction={onArrowClick} />
        </Container>
    );
};

export default CarouselSlide;