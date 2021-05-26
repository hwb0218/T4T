import React from "react";
import ReplyComment from "../ReplyComments/ReplyComment";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../../_actions/commentActions";
import {
  CommentList,
  Writer,
  CreatedAt,
  Comment,
  ModifyComment,
  DeleteComment,
} from "./SingleCommentElements";
import axios from "axios";

const SingleComment = ({ commentLists, user }) => {
  const dispatch = useDispatch();

  const handleDeleteCommentBtn = async (commentId) => {
    try {
      const res = await axios.post("/api/comment/deleteComment", { commentId });
      dispatch(deleteComment(res.data.comment));
    } catch (err) {
      console.error(err);
    }
  };

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
              {user.userData._id === writer._id && (
                <>
                  <ModifyComment>수정</ModifyComment>
                  <DeleteComment onClick={() => handleDeleteCommentBtn(_id)}>
                    삭제
                  </DeleteComment>
                </>
              )}
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
