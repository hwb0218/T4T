import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PageLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #4c4c4c;
  border: 1px solid #a5a5a5;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background: #e2e2e2;
    `}

  &:hover {
    background: #e2e2e2;
  }

  &::selection {
    outline: none;
  }

  & + & {
    border-left: none;
  }
`;

export const PrevBtn = styled(FaChevronLeft)`
  font-size: 0.7rem;
`;
export const NextBtn = styled(FaChevronRight)`
  font-size: 0.7rem;
`;
