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
  width: 100%;
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

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 3px solid white;
  border-radius: 25px;

  & + & {
    margin-left: 2.5rem;
    &:nth-child(2) {
      margin-left: 0;
    }
  }

  &:first-child,
  &:last-child {
    display: none;
  }

  ${({ active }) =>
    active &&
    css`
      background: white;
      transition: background 0.1s ease-out;
    `}
`;

const prevSlide = css`
  ${({ currentSlide }) =>
    currentSlide === 5
      ? css`
          transform: translateX(-500%);
          transition: none;
        `
      : css`
          transform: translateX(-${currentSlide}00%);
          transition: transform 500ms ease-out;
        `}
`;

const nextSlide = css`
  ${({ currentSlide }) =>
    currentSlide === 1
      ? css`
          transform: translateX(-100%);
          transition: none;
        `
      : css`
          transform: translateX(-${currentSlide}00%);
          transition: transform 500ms ease-out;
        `}
`;

export const SliderContainer = styled.div`
  display: flex;
  height: 30vh;

  ${({ direction }) =>
    direction === "left"
      ? css`
          ${prevSlide}
        `
      : css`
          ${nextSlide}
        `}

  ${({ direction, currentSlide }) =>
    direction === "" &&
    css`
      transform: translateX(-${currentSlide}00%);
      transition: transform 550ms ease-out;
    `}
`;

//${({ currentSlide }) =>
//   currentSlide === (5 || 1)
//     ? css`
//         transform: translateX(-${currentSlide}00%);
//         transition: none;
//       `
//     : css`
//         transform: translateX(-${currentSlide}00%);
//         transition: transform 500ms ease-in-out;
//       `}
