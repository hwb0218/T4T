import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import Slide from "./Slide";
import { Container, SliderContainer } from "./CarouselSlideElements";
import Arrow from './Arrow';

const CarouselSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const images = useSelector(state => state.fileUpload);
    const numSlides = images.length;

    const onArrowClick = (direction) => {
        const increment = (direction === 'left' ? -1 : 1);
        const nextSlide = (currentSlide + increment + numSlides) % numSlides;
        setCurrentSlide(nextSlide);
    }

    useEffect(() => {
        cloneNode();
    }, [images]);

    const cloneNode = () => {
        if (sliderRef.current.firstChild && sliderRef.current.lastChild) {
            const firstChild = sliderRef.current.firstElementChild;
            const lastChild = sliderRef.current.lastElementChild;
            const clonedFirst = firstChild.cloneNode(true);
            const clonedLast = lastChild.cloneNode(true);
            console.log(clonedFirst, clonedLast);
            sliderRef.current.appendChild(clonedFirst);
            sliderRef.current.insertBefore(clonedLast, sliderRef.current.firstElementChild);
        }
    }

    return (
        <Container>
            <SliderContainer currentSlide={currentSlide} ref={sliderRef}>
                <Slide images={images}/>
            </SliderContainer>
            <Arrow direction='left' clickFunction={onArrowClick} />
            <Arrow direction='right' clickFunction={onArrowClick} />
        </Container>
    );
};

export default CarouselSlide;