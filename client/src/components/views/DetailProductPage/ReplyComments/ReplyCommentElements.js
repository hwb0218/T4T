import styled from "styled-components";
import { BsArrowReturnRight } from "react-icons/bs/index";

export const StyledReplyComment = styled.div`
  margin-top: 0.5rem;
`;

export const Arrow = styled(BsArrowReturnRight)`
  font-size: 0.8rem;
`;

export const ReplyBtn = styled.span`
  display: inline-block;
  padding: 2px;
  border: 1px solid #5f5f5f;
  border-radius: 2px;
  font-size: 11px;
  color: #5f5f5f;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

export const AnswerIcon = styled.span`
  display: inline-block;
  margin: 0 5px;
  padding: 4px 6px;
  border-radius: 2px;
  background: #5f5f5f;
  color: #e2e2e2;
  font-size: 14px;
  font-weight: bold;
`;

export const Content = styled.span`
  font-size: 15px;
  color: #5f5f5f;
`;
