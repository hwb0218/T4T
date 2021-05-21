import React, { useCallback, useState } from "react";
import {
  CommentContent,
  StyledCommentBox,
  BtnWrapper,
  Btn,
} from "./RelpyCommentBoxElements";
import axios from "axios";

const ReplyCommentBox = ({
  setOpenReply,
  productId,
  user,
  responseTo,
  updateReplyComment,
}) => {
  const [commentValue, setCommentValue] = useState("");

  const elRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
      node.textContent = "";
    }
  }, []);

  const handleSubmit = async () => {
    if (commentValue === "") {
      return alert("내용을 입력하세요.");
    }

    try {
      const variables = {
        content: commentValue,
        writer: user.userData._id,
        productId,
        responseTo,
      };

      const res = await axios.post("/api/comment/saveReplyComment", variables);
      updateReplyComment(res.data.result);
      setOpenReply(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleComment = (e) => {
    setCommentValue(e.currentTarget.textContent);
  };

  return (
    <CommentContent>
      <StyledCommentBox
        contentEditable
        onInput={handleComment}
        onKeyPress={handleKeyPress}
        ref={elRef}
      />
      <BtnWrapper>
        <Btn onClick={() => setOpenReply(false)}>취소</Btn>
        <Btn onClick={handleSubmit}>댓글</Btn>
      </BtnWrapper>
    </CommentContent>
  );
};

export default ReplyCommentBox;
