import styled from "styled-components";

export const CommentContent = styled.div`
  padding-top: 1rem;
`;

export const StyledCommentBox = styled.div`
  outline: none;
  padding: 2px 2px;
  font-size: 15px;
  font-weight: lighter;
  line-height: 20px;
  cursor: text;
  color: #5f5f5f;
  background: #fff;

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
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
