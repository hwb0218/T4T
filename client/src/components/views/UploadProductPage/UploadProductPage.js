import React, { useState } from 'react';
import FileUpload from "../../utils/FileUpload";
import CarouselSlide from "./CarouselSlide/CarouselSlide";

const UploadProductPage = () => {

    return (
        <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: "grid", textAlign: "center", placeItems: "center" }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem' }}>상품을 등록하세요!</div>
            <FileUpload />
            <div style={{ display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center' }}>
                <CarouselSlide />
            </div>
        </div>
    );
};

export default UploadProductPage;