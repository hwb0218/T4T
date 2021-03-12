import React, { useState } from 'react';
import {Form} from "../../../styles/GlobalStyles";
import axios from "axios";

const UploadProductPage = () => {
    const [img, setImg] = useState(null);

    const onChange = (e) => {
        console.log(e.target.files);
        setImg(e.target.files);
    }

    const onClick = async () => {
        const formData = new FormData();
        formData.append('img', img);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }
        const res = await axios.post('/api/upload', formData, config);
        console.log(res);
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>상품을 등록하세요!</div>
            <img src="" alt="" style={{ backgroundColor: 'red' , width: '100px', height: '100px'}}/>
            <input type="file" multiple onChange={onChange}/>
            <button onClick={onClick}>제출</button>
        </div>
    );
};

export default UploadProductPage;