import React, { useState } from "react";
import {
  ProductImageContainer,
  OriginalImg,
  ThumbnailImagesWrapper,
  Thumbnail,
  ThumbnailImages,
} from "./ProductImageElements";

const ProductImage = ({ detail }) => {
  const { images } = detail;

  const [originalImage, setOriginalImage] = useState("");
  const handleClickImage = (e) => {
    setOriginalImage(e.target.src);
  };

  return (
    <ProductImageContainer>
      <div>
        <OriginalImg
          src={
            originalImage
              ? originalImage
              : `http://localhost:5000/${detail.images[0]}`
          }
        />
      </div>
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

export default React.memo(ProductImage);
