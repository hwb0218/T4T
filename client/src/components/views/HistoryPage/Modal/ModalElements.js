import styled from "styled-components";
import { FaTimes } from "react-icons/fa/index";

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
  height: 450px;
  width: 350px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  top: -45px;
  z-index: 10;
  border-radius: 10px;

  ${({ theme }) => theme.mobile`
    width: 90%
  `}
`;

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  z-index: 10;
  color: #525252;
  font-size: 20px;
`;

export const ModalContent = styled.div`
  button {
    padding: 5px 10px;
    background: #5f0080;
    color: #fff;
    border: none;
    border-radius: 2px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &::selection {
      outline: none;
    }
  }
`;
