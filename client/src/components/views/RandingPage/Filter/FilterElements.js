import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 20px 50px 0;

  ${({ theme }) => theme.tablet`
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 30px 0;
  `}
`;

export const FilterWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 2px;

  &:nth-child(2) {
    margin: 0 1.3rem;
  }

  ${({ theme }) => theme.tablet`
     width: 100%;
     
    &:nth-child(2) {
        margin: 0.5rem 0;   
    }
  `}
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
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & + & {
    margin-left: 0.6vw;
  }

  ${({ theme }) => theme.mobile`
        & + & {
            margin-left: 0.3rem;
        }
      `}
`;

export const CheckBoxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: #e2e2e2;
  border-radius: 3px;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:after {
    position: relative;
    bottom: 2px;
    right: -1px;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: white;
    display: none;
  }

  &:hover {
    background: #a5a5a5;
  }

  &:checked {
    background: #5f0080;
    &:after {
      display: inline-block;
    }
  }
`;

export const CheckBoxLabel = styled.label`
  display: inline-block;
  color: #4c4c4c;
  font-size: 0.9vw;
  cursor: pointer;
  padding-left: 5px;

  ${({ theme }) => theme.tablet`
    font-size: 0.9rem;
  `}

  &::before {
    content: "";
  }

  &::selection {
    outline: none;
  }
`;
