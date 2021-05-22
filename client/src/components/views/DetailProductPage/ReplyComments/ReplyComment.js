import React, { useState } from "react";
import ReplyCommentBox from "../ReplyCommentBox/ReplyCommentBox";
import {
  StyledReplyComment,
  Arrow,
  ReplyBtn,
  AnswerIcon,
  Content,
} from "./ReplyCommentElements";

const ReplyComment = ({
  answerCompleted,
  user,
  parentCommentId,
  replyComment,
}) => {
  const [openReply, setOpenReply] = useState(false);

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
          <Content>{replyComment}</Content>
        </StyledReplyComment>
      )}
      {openReply && (
        <ReplyCommentBox
          setOpenReply={setOpenReply}
          parentCommentId={parentCommentId}
        />
      )}
    </>
  );
};

export default React.memo(ReplyComment);
