import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CommentLists from "../CommentLists/CommentLists";
import {
  CommentWrapper,
  TotalComment,
  QnABtn,
  CommentContent,
  Writer,
  CommentBox,
  BtnWrapper,
  Btn,
} from "./CommentElements";

const Comment = ({ productId }) => {
  const user = useSelector((state) => state.user);

  const [commentValue, setCommentValue] = useState("");
  const [commentLists, setCommentLists] = useState([]);
  const [clickQnABtn, setClickQnABtn] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.post("/api/comment/getComments", { productId });
      setCommentLists(res.data.comments);
    };

    getComments();
  }, [productId]);

  const handleComment = (e) => {
    setCommentValue(e.currentTarget.textContent);
  };

  const elRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
      node.textContent = "";
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (commentValue === "") {
      alert("내용을 입력하세요.");
      return;
    }

    try {
      const variables = {
        content: commentValue,
        writer: user.userData._id,
        productId,
      };

      const res = await axios.post("/api/comment/saveComment", variables);
      setCommentLists(res.data.result.concat(commentLists));
      setCommentValue("");
      setClickQnABtn(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickCancel = () => {
    setClickQnABtn(false);
    setShowBtn(false);
  };

  return (
    <CommentWrapper>
      <TotalComment>Q&A {commentLists.length}건</TotalComment>
      <QnABtn clickQnABtn={clickQnABtn} onClick={() => setClickQnABtn(true)}>
        Q&A 작성하기
      </QnABtn>
      {clickQnABtn && (
        <CommentContent>
          <Writer>{user.userData.name}</Writer>
          <CommentBox
            placeholder="댓글을 입력하세요."
            contentEditable
            autoFocus
            onInput={handleComment}
            onKeyPress={handleKeyPress}
            onClick={() => setShowBtn(true)}
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
      <CommentLists commentLists={commentLists} />
    </CommentWrapper>
  );
};

export default React.memo(Comment);
