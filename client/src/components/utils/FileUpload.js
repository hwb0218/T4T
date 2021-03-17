import React, {useEffect, useState, useRef} from 'react';
import axios from "axios";
import { Wrapper, Image, Img, ContentIcon, ContentText, CancelBtn, FileName, CustomBtn } from './FileUploadElements';
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
    const [fileNames, setFileNames] = useState("");
    const inputEl = useRef(null);

    useEffect(() => {
    }, [selectedFiles]);

    const handleImageChange = (e) => {
        const value = e.target.value.split(/\\/);
        const filename = value[value.length - 1];
        setFileNames(filename);

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setSelectedFiles(file);
            setPreviewURL(reader.result);
        }
        if (file) {
            reader.readAsDataURL(file);
        }
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
            // console.log(res.data);
            // setImages(res);
        } catch (error) {
            console.error(error);
        }
    }

    const defaultBtnActive = () => {
        inputEl.current.click();
    }

    const ClickCancelBtn = () => {
        setSelectedFiles(null);
        setPreviewURL('');
        inputEl.current.value = '';
    }

    return (
        <>
            <Wrapper select={selectedFiles}>
                <Image>
                    {previewURL ? <Img src={previewURL} /> : ''}
                </Image>
                <div>
                    <ContentIcon><FaCloudUploadAlt /></ContentIcon>
                    <ContentText>선택한 파일이 없습니다</ContentText>
                </div>
                <CancelBtn onClick={ClickCancelBtn}><FaTimes /></CancelBtn>
                <FileName>{fileNames}</FileName>
            </Wrapper>
            <div style={{ display: 'flex', width: '100%'}}>
                <input type="file" onChange={handleImageChange} accept='image/*' ref={inputEl} hidden />
                <CustomBtn onClick={defaultBtnActive} type='button'>파일 선택</CustomBtn>
                <CustomBtn type='button'>추가</CustomBtn>
            </div>
        </>
    );
};

export default FileUpload;