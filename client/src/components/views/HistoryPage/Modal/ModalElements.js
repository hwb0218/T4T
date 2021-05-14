import styled from "styled-components";
import { FaTimes } from "react-icons/fa/index";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #a1a1a1ad;
  position: fixed;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const ModalWrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #5e5e5e;
  font-size: 1.2rem;

  button {
    margin-top: 2rem;
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

export const RatingWrapper = styled.div`
  width: 100%;

  div:first-child {
    padding-top: 3rem;
  }

  div:last-child {
    padding-top: 1rem;
  }
`;

export const ReviewWrapper = styled.div`
  width: 100%;

  div:first-child {
    padding-top: 1rem;
  }
  div:last-child {
    margin-top: 1rem;
  }
`;

export const Review = styled.div`
  position: relative;
  margin: 0 15px;
  padding: 10px 10px 11px;
  border: 1px solid #cbcbcb;
  background: #f4f4f4;

  textarea {
    width: 100%;
    min-height: 100px;
    border: none;
    background: transparent;
    font-size: 13px;
    line-height: 19px;
    color: #555;
    vertical-align: top;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;
