import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  &::selection {
    outline: none;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const arrow = css`
  position: absolute;
  font-size: 50px;
  cursor: pointer;
  color: white;
`;

export const ArrowLeft = styled(FaChevronLeft)`
  ${arrow};
  left: 0;
  top: 45%;
`;

export const ArrowRight = styled(FaChevronRight)`
  ${arrow};
  right: 0;
  top: 45%;
`;

export const SliderContainer = styled.div`
  display: flex;
  height: 37vh;
  justify-content: flex-start;

  ${({ currentSlide }) =>
    currentSlide === 1
      ? css`
          transform: translateX(-${currentSlide}00%);
          transition: none;
        `
      : css`
          transform: translateX(-${currentSlide}00%);
          transition: transform 0.35s ease-in-out;
        `}
`;
