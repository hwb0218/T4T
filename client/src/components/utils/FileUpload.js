import React, { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";
import imageCompression from "browser-image-compression";
import Images from "./Images";
import {
  Wrapper,
  Image,
  Img,
  ContentIcon,
  ContentText,
  CancelBtn,
  FileName,
  CustomBtn,
  PreviewImagesWrapper,
} from "./FileUploadElements";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const FileUpload = ({ updateImage }) => {
  const { register, errors } = useFormContext();

  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [viewFileNames, setViewFileNames] = useState("");
  const [images, setImages] = useState([]);
  const [id, setId] = useState(0);

  const inputEl = useRef(null);

  const handleImageChange = async (e) => {
    const value = e.target.value.split(/\\/);
    const filename = value[value.length - 1];
    setViewFileNames(filename);

    const file = e.target.files[0];

    const options = {
      maxsizeMB: 2,
      maxWidthOrHeight: 600,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const promise = await imageCompression.getDataUrlFromFile(compressedFile);

      setSelectedFiles(compressedFile);
      setPreviewURL(promise);
    } catch (err) {
      console.error(err);
    }
  };

  const addImage = () => {
    if (selectedFiles && images.length < 3) {
      const nextImage = images.concat({
        id,
        previewImage: previewURL,
        selectedFiles,
      });
      setImages(nextImage);
      setId(id + 1);
      updateImage(nextImage);
      setSelectedFiles(null);
      setPreviewURL("");
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
    updateImage(newImages);
  };

  return (
    <div
      style={{
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
          <ContentText>
            {errors.uploadFile &&
              errors.uploadFile.type === "required" &&
              "⚠ 선택한 파일이 없습니다"}
          </ContentText>
        </div>
        <CancelBtn onClick={clickCancelBtn}>
          <FaTimes />
        </CancelBtn>
        <FileName>{viewFileNames}</FileName>
      </Wrapper>
      <div style={{ display: "flex", width: "100%", margin: "1rem 0" }}>
        <input
          type="file"
          name="uploadFile"
          onChange={handleImageChange}
          accept="image/*"
          ref={(e) => {
            inputEl.current = e;
            register(e, { required: true });
          }}
          hidden
        />
        <CustomBtn onClick={defaultBtnActive} type="button">
          파일 선택
        </CustomBtn>
        <CustomBtn type="button" onClick={addImage}>
          추가
        </CustomBtn>
      </div>
      <PreviewImagesWrapper>
        <Images images={images} deleteImage={deleteImage} />
      </PreviewImagesWrapper>
    </div>
  );
};

export default FileUpload;
