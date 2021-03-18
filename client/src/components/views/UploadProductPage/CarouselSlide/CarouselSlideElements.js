import styled, { css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  &::selection {
    outline: none;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 90%;
  border-radius: 10px;
  overflow: hidden;
`;

const arrow = css`
  position: absolute;
  font-size: 50px;
  cursor: pointer;
  color: #5f0080;
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
  border-radius: 10px;
  height: 33vh;
  ${({ currentSlide }) => css`
      transform: translateX(-${currentSlide}00%);
    `};
  transition: transform 0.35s ease-in-out;
`;