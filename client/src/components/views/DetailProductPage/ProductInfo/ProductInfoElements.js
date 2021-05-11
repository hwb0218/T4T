import styled, { css } from "styled-components";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const ProductInfoContainer = styled.div`
  max-width: 950px;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductInfoList = styled.li`
  display: flex;
  & + & {
    margin-top: 0.3rem;
  }
`;

export const TitleBox = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #000;
`;

export const ProductTit = styled.p`
  width: 115px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

export const ProductContent = styled.p`
  width: 115px;
  letter-spacing: 0.5px;
  font-size: 13px;
  font-weight: bold;

  span {
    vertical-align: top;
    padding-left: 2px;
  }
`;

export const ProductDescription = styled.div`
  min-width: 320px;
  font-weight: bold;
  font-size: 13px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 300px;
`;

export const Btn = styled.button`
  display: inline-block;
  max-width: 300px;
  width: 100%;
  height: 50%;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: white;
  letter-spacing: 1px;
  background: #5f0080;
`;

export const AmountControl = styled.div`
  height: 50%;
  position: relative;
`;

export const Amount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;

  &::selection {
    outline: none;
  }
`;

export const CntMinus = styled(FaCaretLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  font-size: 1.7rem;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #e2e2e2;
      cursor: inherit;
    `}
`;

export const CntPlus = styled(FaCaretRight)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  font-size: 1.7rem;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #e2e2e2;
      cursor: inherit;
    `}
`;
