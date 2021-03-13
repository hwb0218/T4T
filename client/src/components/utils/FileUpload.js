import React, { useState } from 'react';
import axios from "axios";
import emptyPic from '../../images/empty-image.png';
import { FaRegImage } from "react-icons/fa";

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [previewURL, setPreviewURL] = useState("");

    const handleImageChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setPreviewURL(reader.result);
        }
        reader.readAsDataURL(file);
        setSelectedFiles(file);
    }

    const onClick = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img', selectedFiles);

        const config = {
            headers: { "content-type": "multipart/form-data" }
        }
        try {
            const res = await axios.post('/api/product/upload', formData, config);
            console.log(res.data);
            // setImages(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            {selectedFiles !== null ?
                <img src={previewURL} alt=""/> :
                <img src={emptyPic} style={{ backgroundImage: 'url(/images/empty-image)' , width: '80%', height: '350px', margin: '0 auto', borderRadius: '5px' }}/>
            }
            <input type="file" id='input' onChange={handleImageChange} accept='image/*' style={{ display: 'inline-block', width: '30%'}}/>
            <div>
                <label htmlFor="input"><FaRegImage /></label>
            </div>
            <button onClick={onClick} style={{ display: 'inline-block',width: '50%'}}>추가</button>
        </div>
    );
};

export default FileUpload;