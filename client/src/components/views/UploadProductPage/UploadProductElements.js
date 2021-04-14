import styled, { css } from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa/index";

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 50px;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  background: #5f0080;
  color: #f5f6fa;
  transition: all 0.2s ease-in-out;

  ${({ toggle }) =>
    toggle &&
    css`
      max-height: 130px;
      opacity: 1;
      overflow-y: scroll;
    `}

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: #9658fe;
    overflow: hidden;
  }
`;

export const Selected = styled.div`
  background: #5f0080;
  border-radius: 8px;
  margin: 0.5rem 0;
  color: #f5f6fa;
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
`;

export const DownBtn = styled(FaAngleDown)`
  position: absolute;
  font-size: 30px;
  top: 7px;
  right: 10px;
`;

export const UpBtn = styled(FaAngleUp)`
  position: absolute;
  font-size: 30px;
  top: 7px;
  right: 10px;
`;

export const Option = styled.div`
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background: #7303c0;
  }
`;

export const OptionLabel = styled.label`
  cursor: pointer;
`;

export const SelectInput = styled.input`
  display: none;
`;
