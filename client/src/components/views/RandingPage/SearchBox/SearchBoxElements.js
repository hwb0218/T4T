import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;
  margin: 0 0 10px;

  ${({ theme }) => theme.tablet`
    padding: 0 30px;
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
