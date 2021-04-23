import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  font-size: 0.7rem;
  font-weight: 600;
  color: #4c4c4c;
  border: 1px solid #a5a5a5;
  cursor: pointer;

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

export const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &::selection {
    outline: none;
  }

  ${({ $active }) =>
    $active &&
    css`
      background: #e2e2e2;
    `}
`;

export const PrevBtn = styled(FaChevronLeft)`
  font-size: 0.5rem;
`;
export const NextBtn = styled(FaChevronRight)`
  font-size: 0.5rem;
`;
