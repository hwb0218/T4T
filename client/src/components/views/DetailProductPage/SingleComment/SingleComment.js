import React from "react";
import ReplyComment from "../ReplyComments/ReplyComment";
import {
  CommentList,
  Writer,
  CreatedAt,
  Content,
} from "./SingleCommentElements";

const SingleComment = ({ commentLists, user }) => {
  return (
    <>
      {commentLists.map(
        ({
          writer,
          createdDate,
          content,
          _id,
          answerCompleted,
          replyComment,
        }) => (
          <CommentList key={_id}>
            <div>
              <Writer>{writer.name}</Writer>
              <CreatedAt>{createdDate}</CreatedAt>
              <Content>{content}</Content>
            </div>
            <ReplyComment
              answerCompleted={answerCompleted}
              parentCommentId={_id}
              replyComment={replyComment}
              user={user}
            />
          </CommentList>
        )
      )}
    </>
  );
};

export default React.memo(SingleComment);
