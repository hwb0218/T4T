import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import axios from "axios";
import CommentLists from "../CommentLists/CommentLists";

const CommentWrapper = styled.div`
  margin-top: 1rem;
`;

const TotalComment = styled.p`
  margin-bottom: 1rem;
`;

const QnABtn = styled.button`
  margin-bottom: 0.5rem;
  padding: 0 15px;
  height: 34px;
  border: none;
  background: #565656;
  font-size: 12px;
  color: white;

  ${({ clickQnABtn }) =>
    clickQnABtn &&
    css`
      display: none;
    `}
`;

const CommentContent = styled.div`
  padding: 0.5rem 0.5rem;
`;

const Writer = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 2px 6px;
  border-radius: 2px;
  background: #565656;
  color: white;
  font-size: 15px;
`;

const CommentBox = styled.div`
  outline: none;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #e2e2e2;
  font-size: 15px;
  font-weight: lighter;
  cursor: text;

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  }

  &:focus {
    border-color: #565656;
  }

  ${({ showBtn }) =>
    showBtn &&
    css`
      border-color: #565656;
    `}
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const Btn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  background: #5f0080;
  color: white;
  font-size: 15px;
  font-weight: lighter;
  cursor: pointer;
  outline: none;

  &:first-child {
    background: inherit;
    color: inherit;
    font-weight: 700;
  }
`;

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
      <TotalComment>Q&A {commentLists.length}개</TotalComment>
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
