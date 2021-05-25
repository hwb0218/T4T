import styled from "styled-components";

export const CommentList = styled.li`
  & + & {
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    border-top: 1px solid #e5e5e5;
  }
`;

export const Writer = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  padding: 4px 6px;
  border-radius: 2px;
  background: #5f0080;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const CreatedAt = styled.span`
  position: relative;
  top: -2px;
  font-size: 11px;
  color: #b4b4b4;
  font-weight: bold;
`;

export const Comment = styled.p`
  position: relative;
  left: 2px;
  margin: 0.6rem 0;
  font-size: 14px;
  color: #5f5f5f;
`;
