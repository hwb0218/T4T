import React from "react";
import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";

const CommentListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  padding: 0.5rem 0.5rem;
`;

const SingleComment = styled.div`
  & + & {
    padding-top: 0.5rem;
    margin-top: 1rem;
    border-top: 1px solid #e5e5e5;
  }
`;

const Writer = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 2px 8px;
  border-radius: 2px;
  background: #565656;
  color: white;
  font-size: 15px;
`;

const CreatedAt = styled.span`
  font-size: 11px;
  color: #b4b4b4;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 12px;
  color: #5f5f5f;
`;

const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyComment = styled(FaRegCommentDots)`
  margin-bottom: 1px;
  font-size: 3rem;
  color: #5f5f5f;
`;

const CommentLists = ({ commentLists }) => {
  return (
    <CommentListsWrapper>
      {commentLists.length > 0 ? (
        commentLists.map(({ content, _id, writer, createdAt }) => (
          <SingleComment key={_id}>
            <Writer>{writer.name}</Writer>
            <CreatedAt>{createdAt}</CreatedAt>
            <Content>{content}</Content>
          </SingleComment>
        ))
      ) : (
        <EmptyBox>
          <EmptyComment />
          <Content>아직 작성된 후기가 없습니다.</Content>
        </EmptyBox>
      )}
    </CommentListsWrapper>
  );
};

export default React.memo(CommentLists);
