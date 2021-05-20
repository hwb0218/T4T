import React, { useState } from "react";
import ReplyCommentBox from "../ReplyCommentBox/ReplyCommentBox";
import {
  SingleComment,
  Writer,
  CreatedAt,
  Content,
  ReplyBtn,
} from "./CommentListsElements";

const CommentLists = ({ comment, user, productId }) => {
  const { writer, content, createdDate, _id } = comment;

  const [openReply, setOpenReply] = useState(false);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };

  return (
    <>
      <SingleComment>
        <Writer>{writer.name}</Writer>
        <CreatedAt>{createdDate}</CreatedAt>
        {user.userData && user.userData.isSeller && (
          <ReplyBtn onClick={onClickReplyOpen}>답글달기</ReplyBtn>
        )}
        <Content>{content}</Content>
        {openReply && (
          <ReplyCommentBox
            setOpenReply={setOpenReply}
            user={user}
            productId={productId}
            responseTo={_id}
          />
        )}
      </SingleComment>
    </>
  );
};

export default React.memo(CommentLists);
