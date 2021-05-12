import styled from "styled-components";

export const ProductImageContainer = styled.div`
  display: flex;
  height: 350px;
`;

export const OriginalImg = styled.img`
  max-width: 550px;
  width: 100%;
  margin-right: 1rem;
  object-fit: cover;
`;

export const ThumbnailImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;

  & + & {
    margin-top: 0.5rem;
  }
`;

export const ThumbnailImages = styled.img`
  max-width: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.05);
  }
`;
