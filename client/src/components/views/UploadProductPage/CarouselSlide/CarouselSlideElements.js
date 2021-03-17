import styled, { css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Img = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 90%;
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
  top: 130px;
`;

export const ArrowRight = styled(FaChevronRight)`
  ${arrow};
  right: 0;
  top: 130px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  ${({ currentSlide }) => css`
      transform: translateX(-${currentSlide}00%);
    `};
  transition: transform 0.5s ease-in-out;
`;