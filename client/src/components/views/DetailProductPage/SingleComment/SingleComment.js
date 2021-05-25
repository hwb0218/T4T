import React from "react";
import ReplyComment from "../ReplyComments/ReplyComment";
import {
  CommentList,
  Writer,
  CreatedAt,
  Comment,
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
              <Comment>{content}</Comment>
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
