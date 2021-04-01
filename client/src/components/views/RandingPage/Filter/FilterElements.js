import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  padding: 20px 0;
`;

export const DestinationWrapper = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 2px;
`;

export const Panel = styled.div`
  font-size: 13px;
  padding: 10px 15px;
  background: #f6f6f6;
  border-bottom: 1px solid #e2e2e2;
`;

export const CheckBoxes = styled.div`
  display: flex;
  padding: 10px 15px;
  & + & {
    margin-left: 0.5rem;
  }
`;

export const CheckBox = styled.div`
  & + & {
    margin-left: 0.9rem;
  }
`;

const check = styled(FaCheck)`
  color: black;
`;

export const CheckBoxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: #e2e2e2;
  margin: 0;

  &::after {
    content: ${check};
  }
`;

export const CheckBoxLabel = styled.label`
  font-size: 13px;
  position: relative;
  top: -2.5px;
`;
