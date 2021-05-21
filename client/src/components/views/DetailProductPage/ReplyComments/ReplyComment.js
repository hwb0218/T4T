import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowReturnRight } from "react-icons/bs";
import ReplyCommentBox from "../ReplyCommentBox/ReplyCommentBox";
import axios from "axios";

const StyledReplyComment = styled.div`
  margin-top: 0.5rem;
`;

const Arrow = styled(BsArrowReturnRight)``;

const ReplyBtn = styled.span`
  display: inline-block;
  padding: 2px;
  border: 1px solid #5f5f5f;
  border-radius: 2px;
  font-size: 11px;
  color: #5f5f5f;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

const ReplyComment = ({
  answerCompleted,
  user,
  parentCommentId,
  productId,
}) => {
  const [replyCommentList, setReplyCommentList] = useState([]);
  const [openReply, setOpenReply] = useState(false);

  useEffect(() => {
    const fetchReplyComment = async () => {
      const resReplyComment = await axios.post(
        "/api/comment/getReplyComments",
        {
          productId,
        }
      );
      setReplyCommentList(resReplyComment.data.replyComments);
    };
    fetchReplyComment();
  }, [productId]);

  const updateReplyComment = (newComment) => {
    setReplyCommentList(replyCommentList.concat(newComment));
  };

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };

  const renderReplyComment = replyCommentList.map(
    ({ responseTo, _id, content }) => (
      <Fragment key={_id}>
        {responseTo === parentCommentId && (
          <StyledReplyComment>
            <Arrow />
            <span>답변</span>
            <span>{content}</span>
          </StyledReplyComment>
        )}
      </Fragment>
    )
  );

  return (
    <>
      {user.userData && user.userData.isSeller && !answerCompleted && (
        <ReplyBtn onClick={onClickReplyOpen}>답변달기</ReplyBtn>
      )}
      {renderReplyComment}
      {openReply && (
        <ReplyCommentBox
          setOpenReply={setOpenReply}
          user={user}
          productId={productId}
          responseTo={parentCommentId}
          updateReplyComment={updateReplyComment}
        />
      )}
    </>
  );
};

export default ReplyComment;
