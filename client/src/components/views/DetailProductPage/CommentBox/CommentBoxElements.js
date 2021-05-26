import styled, { css } from "styled-components";

export const CommentContent = styled.div`
  padding: 0.5rem 0.5rem;
`;

export const StyledCommentBox = styled.div`
  outline: none;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  border-bottom: 1px solid #e2e2e2;
  color: #5f5f5f;
  font-weight: lighter;
  cursor: text;

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  }

  &:focus {
    border-color: #5f5f5f;
  }

  ${({ showBtn }) =>
    showBtn &&
    css`
      border-color: #5f5f5f;
    `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Btn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  background: #5f0080;
  color: white;
  font-size: 15px;
  font-weight: lighter;
  cursor: pointer;
  outline: none;

  &:first-child {
    background: inherit;
    color: inherit;
    font-weight: 700;
  }
`;
