import React, { useState } from 'react';
import FileUpload from "../../utils/FileUpload";
import CarouselSlide from "./CarouselSlide/CarouselSlide";

const UploadProductPage = () => {

    return (
        <>
        <header style={{ textAlign: "center", marginBottom: '1rem'}}>상품을 등록하세요</header>
        <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: "grid", textAlign: "center", placeItems: "center" }}>
            <FileUpload />
        </div>
        </>
    );
};

export default UploadProductPage;