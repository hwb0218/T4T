import React from "react";
import {
  CommentListsWrapper,
  SingleComment,
  Writer,
  CreatedAt,
  Content,
  EmptyBox,
  EmptyComment,
} from "./CommentListsElements";

const CommentLists = ({ commentLists }) => {
  return (
    <CommentListsWrapper>
      {commentLists.length > 0 ? (
        commentLists.map(({ content, _id, writer, createdDate }) => (
          <SingleComment key={_id}>
            <Writer>{writer.name}</Writer>
            <CreatedAt>{createdDate}</CreatedAt>
            <Content>{content}</Content>
          </SingleComment>
        ))
      ) : (
        <EmptyBox>
          <EmptyComment />
          <Content>작성된 Q&A가 없습니다.</Content>
        </EmptyBox>
      )}
    </CommentListsWrapper>
  );
};

export default React.memo(CommentLists);
