import React from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa/index";
import { CancelBtn } from "./FileUploadElements";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;

  &:hover {
    ${CancelBtn} {
      display: block;
      right: 5px;
      top: 5px;
    }
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;

  ${({ url }) =>
    url &&
    css`
      background-image: url("${url}");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;

const Images = ({ images, deleteImage }) => {
  return (
    <>
      {images.map(({ id, previewImage, selectedFiles }) => (
        <ImageWrapper key={id}>
          {/*<Img src={previewImage} alt={selectedFiles.name} />*/}
          <Img url={previewImage} />
          <CancelBtn onClick={() => deleteImage(id)}>
            <FaTimes />
          </CancelBtn>
        </ImageWrapper>
      ))}
    </>
  );
};

export default Images;
