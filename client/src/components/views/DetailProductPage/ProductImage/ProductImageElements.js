import styled from "styled-components";

export const ProductImageContainer = styled.div`
  display: flex;
  height: 350px;

  ${({ theme }) => theme.mobile`
    flex-direction: column;
    height: 100%;
  `}
`;

export const OriginalImg = styled.img`
  display: block;
  height: 100%;
  fwidth: 550px;
  margin-right: 1rem;
  object-fit: cover;

  ${({ theme }) => theme.mobile`
      height: 30vh;  
      max-width: initial;  
      width: 100%;
      margin-right: initial;   
  `}
`;

export const ThumbnailImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mobile`
    flex-direction: row;
    height: 120px;
    margin-top: 0.5rem;   
  `}
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;

  & + & {
    margin-top: 0.5rem;

    ${({ theme }) => theme.mobile`
        margin-top: initial;
    `}
  }
`;

export const ThumbnailImages = styled.img`
  display: block;
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
