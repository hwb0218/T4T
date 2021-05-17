import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa/index";
import { CancelBtn } from "./FileUploadElements";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
  overflow-y: hidden;

  &:hover {
    ${CancelBtn} {
      display: block;
      right: 5px;
      top: 5px;
    }
  }
`;

const Images = ({ images, deleteImage }) => {
  return (
    <>
      {images.map(({ id, previewImage, selectedFiles }) => (
        <ImageWrapper key={id}>
          <img
            src={previewImage}
            alt={selectedFiles.name}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <CancelBtn onClick={() => deleteImage(id)}>
            <FaTimes />
          </CancelBtn>
        </ImageWrapper>
      ))}
    </>
  );
};

export default Images;
