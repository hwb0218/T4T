import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  saveComment,
  modifyComment,
} from "../../../../_actions/commentActions";
import {
  Btn,
  BtnWrapper,
  CommentContent,
  StyledCommentBox,
} from "./CommentBoxElements";
import axios from "axios";

const CommentBox = ({
  user,
  productId,
  setClickCommentBtn,
  clickCommentBtn,
  type,
  comment,
  commentId,
}) => {
  const dispatch = useDispatch();

  const [commentValue, setCommentValue] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const elRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
      node.textContent = comment;
      setCommentValue(comment);
    }
  }, []);

  const handleSubmit = async (type) => {
    try {
      if (commentValue === undefined || commentValue === "") {
        return alert("내용을 입력하세요.");
      }
      if (type === "save") {
        const variables = {
          content: commentValue,
          writer: user.userData._id,
          productId,
        };

        const res = await axios.post("/api/comment/saveComment", variables);
        dispatch(saveComment(res.data.result));
      }
      if (type === "modify") {
        const variables = {
          content: commentValue,
          commentId,
        };

        const res = await axios.post("/api/comment/modifyComment", variables);
        dispatch(modifyComment(res.data.comment, commentId));
      }
      setCommentValue("");
      setClickCommentBtn(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(type);
    }
  };

  const handleComment = (e) => {
    setCommentValue(e.currentTarget.textContent);
  };

  const handleClickCancel = () => {
    setClickCommentBtn(false);
    setShowBtn(false);
  };

  return (
    <>
      {clickCommentBtn && (
        <CommentContent>
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
            <Btn onClick={() => handleSubmit(type)}>댓글</Btn>
          </BtnWrapper>
        </CommentContent>
      )}
    </>
  );
};

export default CommentBox;
