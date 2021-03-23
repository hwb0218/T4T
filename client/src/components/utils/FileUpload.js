import React, { useState, useRef, useEffect } from "react";
import Images from "./Images";
import { useDispatch } from "react-redux";
import { fileUpload } from "../../_actions/fileUpload/fileUploadActions";
import axios from "axios";
import {
  Wrapper,
  Image,
  Img,
  ContentIcon,
  ContentText,
  CancelBtn,
  FileName,
  CustomBtn,
} from "./FileUploadElements";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [fileNames, setFileNames] = useState("");
  const [images, setImages] = useState([]);
  const [id, setId] = useState(0);

  const inputEl = useRef(null);

  const handleImageChange = (e) => {
    const value = e.target.value.split(/\\/);
    const filename = value[value.length - 1];
    setFileNames(filename);

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setSelectedFiles(file);
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const addImage = () => {
    if (selectedFiles && images.length < 6) {
      const nextImage = images.concat({ id, image: previewURL });
      setImages(nextImage);
      setId(id + 1);
    }
  };

  const onClick = async () => {
    if (selectedFiles) {
      const formData = new FormData();
      formData.append("img", selectedFiles);

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      try {
        const res = await axios.post("/api/product/upload", formData, config);
        const filePath = res.data.filePath;
        console.log(filePath);
        setImages([...images, filePath]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const defaultBtnActive = () => {
    inputEl.current.click();
  };

  const clickCancelBtn = () => {
    setSelectedFiles(null);
    setPreviewURL("");
    inputEl.current.value = "";
  };

  const deleteImage = (selectedImage) => {
    const newImages = images.filter(({ id }) => id !== selectedImage);
    setImages(newImages);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        display: "grid",
        textAlign: "center",
        placeItems: "center",
      }}
    >
      <Wrapper select={selectedFiles}>
        <Image>{previewURL ? <Img src={previewURL} /> : ""}</Image>
        <div>
          <ContentIcon>
            <FaCloudUploadAlt />
          </ContentIcon>
          <ContentText>선택한 파일이 없습니다</ContentText>
        </div>
        <CancelBtn onClick={clickCancelBtn}>
          <FaTimes />
        </CancelBtn>
        <FileName>{fileNames}</FileName>
      </Wrapper>
      <div style={{ display: "flex", width: "100%", margin: "1rem auto" }}>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          ref={inputEl}
          hidden
        />
        <CustomBtn onClick={defaultBtnActive} type="button">
          파일 선택
        </CustomBtn>
        <CustomBtn type="button" onClick={addImage}>
          추가
        </CustomBtn>
      </div>
      <div
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "0.6rem",
          rowGap: "0.6rem",
        }}
      >
        <Images images={images} deleteImage={deleteImage} />
      </div>
    </div>
  );
};

export default FileUpload;
