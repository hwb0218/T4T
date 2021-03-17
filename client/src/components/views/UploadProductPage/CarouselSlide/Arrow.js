import React from 'react';
import { ArrowLeft, ArrowRight } from "./CarouselSlideElements";

const Arrow = ({ direction, clickFunction }) => {
    return (
        <div onClick={() => clickFunction(direction)}>
            {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
        </div>
    );

};
export default Arrow;