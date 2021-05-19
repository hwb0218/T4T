import React, { useCallback, useState } from "react";
import { CommentContent, StyledCommentBox } from "./RelpyCommentBoxElements";
import axios from "axios";

const ReplyCommentBox = () => {
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
    </CommentContent>
  );
};

export default ReplyCommentBox;
