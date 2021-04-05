import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.ul`
  background: #f2f2f2;
  padding: 30px 30px;
`;

export const CardList = styled.li`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 25%);
  row-gap: 1.5rem;
  column-gap: 1.8rem;

  ${({ theme }) => theme.mobile`
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `}
`;

export const Card = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
`;

export const ImageWrap = styled.figure`
  position: relative;
  overflow: hidden;
  padding-top: 280px;

  &::after {
    ${({ destination }) =>
      destination &&
      css`
        content: "${destination}";
        position: absolute;
        left: 0;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 60px);
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #9658fe;
        box-sizing: border-box;
      `}
  }
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
    overflow: hidden;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px 20px;
  color: #202020;
`;

export const ProductTitle = styled.div`
  top: 3px;
  left: 3px;
  border-radius: 2px;
  font-weight: bold;
  letter-spacing: 1px;
  word-break: keep-all;
`;

export const ProductDescription = styled.div`
  bottom: 6px;
  left: 3px;
  font-weight: bold;
  letter-spacing: 1px;
`;
