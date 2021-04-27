import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa/index";

export const FilterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  top: -45px;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #525252;

  button {
    padding: 5px 10px;
    background: #5f0080;
    color: #fff;
    border: none;
    border-radius: 2px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  z-index: 10;
  color: #525252;
  font-size: 20px;
`;

export const AmountControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Amount = styled.span`
  font-size: 20px;

  &::selection {
    outline: none;
  }
`;

export const CntMinus = styled(FaCaretLeft)`
  font-size: 20px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #e2e2e2;
      cursor: inherit;
    `}
`;

export const CntPlus = styled(FaCaretRight)`
  font-size: 20px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      color: #e2e2e2;
      cursor: inherit;
    `}
`;
