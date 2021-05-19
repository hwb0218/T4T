import React, { useCallback, useState } from "react";
import {
  Btn,
  BtnWrapper,
  CommentContent,
  QnABtn,
  StyledCommentBox,
  Writer,
} from "./CommentBoxElements";
import axios from "axios";

const CommentBox = ({ user, productId, saveComment }) => {
  const [commentValue, setCommentValue] = useState("");
  const [clickQnABtn, setClickQnABtn] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

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
      };

      const res = await axios.post("/api/comment/saveComment", variables);
      saveComment(res.data.result);
      setCommentValue("");
      setClickQnABtn(false);
    } catch (err) {
      console.log(err);
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

  const handleClickCancel = () => {
    setClickQnABtn(false);
    setShowBtn(false);
  };

  return (
    <>
      {user.userData && !user.userData.isSeller && (
        <QnABtn clickQnABtn={clickQnABtn} onClick={() => setClickQnABtn(true)}>
          Q&A 작성하기
        </QnABtn>
      )}
      {clickQnABtn && (
        <CommentContent>
          <Writer>{user.userData.name}</Writer>
          <StyledCommentBox
            placeholder="댓글을 입력하세요."
            contentEditable
            onInput={handleComment}
            onKeyPress={handleKeyPress}
            showBtn={showBtn}
            spellCheck={false}
            ref={elRef}
          />
          <BtnWrapper>
            <Btn onClick={handleClickCancel}>취소</Btn>
            <Btn onClick={handleSubmit}>댓글</Btn>
          </BtnWrapper>
        </CommentContent>
      )}
    </>
  );
};

export default CommentBox;
