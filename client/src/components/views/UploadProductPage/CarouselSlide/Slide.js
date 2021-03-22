import React from 'react';
import { Img } from './CarouselSlideElements';

const Slide = ({ images }) => {

    return (
        <>
            {images.length > 0 && images.map((img, i) => (
                <Img src={`http://localhost:5000/${img}`} key={i}/>
            ))}
        </>
    );
};

export default Slide;