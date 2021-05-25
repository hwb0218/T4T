import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReplyCommentBox from "../ReplyCommentBox/ReplyCommentBox";
import {
  StyledReplyComment,
  Arrow,
  ReplyBtn,
  AnswerIcon,
  ModifyReply,
  DeleteReply,
  Content,
} from "./ReplyCommentElements";
import axios from "axios";
import { updateReplyComment } from "../../../../_actions/commentActions";

const ReplyComment = ({
  answerCompleted,
  user,
  parentCommentId,
  replyComment,
}) => {
  const dispatch = useDispatch();

  const [openReply, setOpenReply] = useState(false);

  const removeReplyComment = async () => {
    try {
      const res = await axios.post("/api/comment/removeReplyComment", {
        parentCommentId,
      });
      dispatch(updateReplyComment(res.data.comments, parentCommentId));
    } catch (err) {
      console.error(err);
    }
  };

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };

  return (
    <>
      {user.userData && user.userData.isSeller && !answerCompleted ? (
        <ReplyBtn onClick={onClickReplyOpen}>답변달기</ReplyBtn>
      ) : null}
      {replyComment && (
        <StyledReplyComment>
          <Arrow />
          <AnswerIcon>판매자</AnswerIcon>
          <ModifyReply onClick={() => setOpenReply(!openReply)}>
            수정
          </ModifyReply>
          <DeleteReply onClick={removeReplyComment}>삭제</DeleteReply>
          {!openReply && <Content>{replyComment}</Content>}
        </StyledReplyComment>
      )}
      {openReply && (
        <ReplyCommentBox
          replyComment={replyComment}
          setOpenReply={setOpenReply}
          parentCommentId={parentCommentId}
        />
      )}
    </>
  );
};

export default React.memo(ReplyComment);
