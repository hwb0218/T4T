import styled, { css } from "styled-components";

export const CommentWrapper = styled.div`
  margin-top: 1rem;
`;

export const TotalComment = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const QnABtn = styled.button`
  margin-bottom: 0.5rem;
  padding: 0 15px;
  height: 34px;
  border: none;
  background: #565656;
  font-size: 12px;
  color: white;

  ${({ clickQnABtn }) =>
    clickQnABtn &&
    css`
      display: none;
    `}
`;

export const CommentContent = styled.div`
  padding: 0.5rem 0.5rem;
`;

export const Writer = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 2px 6px;
  border-radius: 2px;
  background: #565656;
  color: white;
  font-size: 15px;
`;

export const CommentBox = styled.div`
  outline: none;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  border-bottom: 1px solid #e2e2e2;
  font-weight: lighter;
  cursor: text;

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  }

  &:focus {
    border-color: #565656;
  }

  ${({ showBtn }) =>
    showBtn &&
    css`
      border-color: #e2e2e2;
    `}
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
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
