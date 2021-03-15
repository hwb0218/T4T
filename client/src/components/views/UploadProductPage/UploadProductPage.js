import React, { useState } from 'react';
import FileUpload from "../../utils/FileUpload";

const UploadProductPage = () => {
    return (
        <div style={{ maxWidth: '700px', margin: '1rem auto', display: "grid", textAlign: "center", placeItems: "center" }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>상품을 등록하세요!</div>
            <FileUpload />
        </div>
    );
};

export default UploadProductPage;