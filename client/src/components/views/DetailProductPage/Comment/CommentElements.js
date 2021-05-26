import styled, { css } from "styled-components";
import { FaExclamationCircle } from "react-icons/fa/index";

export const QnABtn = styled.button`
  margin-bottom: 0.5rem;
  padding: 0 15px;
  height: 34px;
  border: none;
  background: #565656;
  font-size: 12px;
  color: white;

  ${({ clickCommentBtn }) =>
    clickCommentBtn &&
    css`
      display: none;
    `}
`;

export const CommentContainer = styled.div`
  margin-top: 1rem;
`;

export const TotalComment = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const CommentListsWrapper = styled.ul`
  background: #f2f2f2;
  padding: 0.5rem;
`;

export const Content = styled.p`
  font-size: 12px;
  color: #5f5f5f;
`;

export const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyComment = styled(FaExclamationCircle)`
  margin-bottom: 5px;
  font-size: 3rem;
  color: #5f5f5f;
`;
