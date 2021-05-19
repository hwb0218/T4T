import styled from "styled-components";
import { FaExclamationCircle } from "react-icons/fa/index";

export const SingleComment = styled.li`
  & + & {
    padding-top: 0.5rem;
    margin-top: 1rem;
    border-top: 1px solid #e5e5e5;
  }
`;

export const Writer = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 4px 6px;
  border-radius: 2px;
  background: #565656;
  color: white;
  font-size: 14px;
`;

export const CreatedAt = styled.span`
  font-size: 11px;
  color: #b4b4b4;
  font-weight: bold;
`;

export const Content = styled.p`
  font-size: 15px;
  color: #5f5f5f;
`;

export const ReplyBtn = styled.span`
  margin-left: 10px;
  font-size: 11px;
  color: #5f5f5f;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;
