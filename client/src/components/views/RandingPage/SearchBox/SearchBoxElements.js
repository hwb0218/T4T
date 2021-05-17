import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchBoxContainer = styled.div`
  padding: 0 50px;
  margin-bottom: 10px;

  ${({ theme }) => theme.tablet`
    padding: 0 30px;
  `}

  ${({ theme }) => theme.mobile`
    padding: 0 5px;
  `}
`;

export const SearchBoxContent = styled.div`
  position: relative;
  height: 40px;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
`;

export const SearchBoxInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  padding: 10px 20px;
  background: #f6f6f6;
  border: none;
  outline: none;
  color: #8b7d77;
`;

export const ClearSearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 255px;
  width: 55px;
  height: 100%;
  border: none;
  border-radius: 2px;
  font-size: 0.8vw;
  font-weight: bold;
  color: white;
  background: #6f00cc;
`;
