import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clickRightBtn } from '../../../../_actions/fileUpload/fileUploadActions';
import Slide from "./Slide";
import { Container, SliderContainer } from "./CarouselSlideElements";
import Arrow from './Arrow';

const CarouselSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dispatch = useDispatch();
    const sliderRef = useRef(null);

    const storeImages = useSelector(state => state.fileUpload);

    const onArrowClick = (direction) => {
        if (direction === 'right') {
            dispatch(clickRightBtn(storeImages[0]));
        }
    }

    return (
        <Container>
            <SliderContainer currentSlide={currentSlide} ref={sliderRef}>
                <Slide images={storeImages}/>
            </SliderContainer>
            <Arrow direction='left' clickFunction={onArrowClick} />
            <Arrow direction='right' clickFunction={onArrowClick} />
        </Container>
    );
};

export default CarouselSlide;