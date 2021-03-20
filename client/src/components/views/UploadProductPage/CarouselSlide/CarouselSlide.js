import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clickRightBtn } from '../../../../_actions/fileUpload/fileUploadActions';
import { Container, SliderContainer } from "./CarouselSlideElements";
import Slide from "./Slide";
import Arrow from './Arrow';

const CarouselSlide = () => {
    const dispatch = useDispatch();
    const storeImages = useSelector(state => state.fileUpload);
    const numSlides = storeImages.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    const onArrowClick = (direction) => {
        const increment = (direction === 'left' ? -1 : 1);
        const nextSlide = (currentSlide + increment + numSlides) % numSlides;
        setCurrentSlide(nextSlide);
        if (direction === 'right') {
            if(currentSlide === numSlides - 1) {
                setTimeout(() => {
                    // setCurrentSlide(1);
                }, 350);
            }
            // setCurrentSlide(1);
            // setTimeout(() => {
            //     dispatch(clickRightBtn(storeImages[0]));
            //     setCurrentSlide(0);
            // }, 350);
        }
    }

    return (
        <Container>
            <SliderContainer currentSlide={currentSlide}>
                <Slide images={storeImages}/>
            </SliderContainer>
            <Arrow direction='left' clickFunction={onArrowClick} />
            <Arrow direction='right' clickFunction={onArrowClick} />
        </Container>
    );
};

export default CarouselSlide;