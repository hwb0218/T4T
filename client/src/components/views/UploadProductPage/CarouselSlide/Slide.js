import React from 'react';
import { Img } from './CarouselSlideElements';

const Slide = ({ images }) => {

    return (
        <>
            {images.map((img, i) => (
                <Img src={img} key={i}/>
            ))}
        </>
    );
};

export default Slide;