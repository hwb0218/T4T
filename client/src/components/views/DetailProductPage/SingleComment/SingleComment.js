import React, { useState } from "react";
import ReplyComment from "../ReplyComments/ReplyComment";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../../_actions/commentActions";
import CommentBox from "../CommentBox/CommentBox";
import {
  CommentList,
  Writer,
  CreatedAt,
  Comment,
  ModifyComment,
  DeleteComment,
} from "./SingleCommentElements";
import axios from "axios";

const SingleComment = ({ comment, user }) => {
  const {
    _id,
    writer,
    createdDate,
    answerCompleted,
    replyComment,
    content,
  } = comment;
  const dispatch = useDispatch();
  const [clickCommentBtn, setClickCommentBtn] = useState(false);
  const [type, setType] = useState("");

  const handleModifyCommentBtn = () => {
    setClickCommentBtn(true);
    setType("modify");
  };

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
      <CommentList>
        <div>
          <Writer>{writer.name}</Writer>
          <CreatedAt>{createdDate}</CreatedAt>
          {user.userData._id === writer._id && (
            <>
              {!answerCompleted && (
                <ModifyComment onClick={handleModifyCommentBtn}>
                  수정
                </ModifyComment>
              )}
              <DeleteComment onClick={() => handleDeleteCommentBtn(_id)}>
                삭제
              </DeleteComment>
            </>
          )}
          {!clickCommentBtn && <Comment>{content}</Comment>}
          <CommentBox
            user={user}
            clickCommentBtn={clickCommentBtn}
            setClickCommentBtn={setClickCommentBtn}
            comment={content}
            commentId={_id}
            type={type}
          />
        </div>
        <ReplyComment
          answerCompleted={answerCompleted}
          parentCommentId={_id}
          replyComment={replyComment}
          user={user}
        />
      </CommentList>
    </>
  );
};

export default React.memo(SingleComment);
