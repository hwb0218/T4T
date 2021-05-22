import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa/index";

export const ReviewWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
`;

export const TotalReview = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const ReviewList = styled.ul`
  background: #f2f2f2;
  padding: 0.5rem 0.5rem;
`;

export const ReviewContent = styled.li`
  & + & {
    padding-top: 0.5rem;
    margin-top: 1rem;
    border-top: 1px solid #e5e5e5;
  }
`;

export const Writer = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 2px 6px;
  border-radius: 2px;
  background: #565656;
  color: white;
  font-size: 15px;
`;

export const CreatedDate = styled.span`
  margin: 0 0.5rem;
  font-size: 11px;
  color: #b4b4b4;
  font-weight: bold;
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

export const EmptyComment = styled(FaRegCommentDots)`
  margin-bottom: 5px;
  font-size: 3rem;
  color: #5f5f5f;
`;
