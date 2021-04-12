import React, { useState } from "react";
import styled, { css } from "styled-components";

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
`;

const OriginalImg = styled.img`
  max-width: 550px;
  margin-right: 1rem;
  object-fit: cover;
`;

const ThumbnailImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;

  & + & {
    margin-top: 0.5rem;
  }
`;

const ThumbnailImages = styled.img`
  display: block;
  max-width: 230px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.15s linear;

  &:hover {
    transform: scale(1.08);
  }
`;

const ProductImage = ({ detail }) => {
  const { images } = detail;

  const [originalImage, setOriginalImage] = useState("");
  const handleClickImage = (e) => {
    setOriginalImage(e.target.src);
  };

  return (
    <ProductImageContainer>
      <OriginalImg
        src={
          originalImage
            ? originalImage
            : `http://localhost:5000/${detail.images[0]}`
        }
      />
      <ThumbnailImagesWrapper>
        {images.map((image, i) => (
          <Thumbnail key={i}>
            <ThumbnailImages
              src={`http://localhost:5000/${image}`}
              onClick={handleClickImage}
            />
          </Thumbnail>
        ))}
      </ThumbnailImagesWrapper>
    </ProductImageContainer>
  );
};

export default ProductImage;
