import React, { useState, useEffect, useRef } from "react";
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

const Writer = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 2px 4px;
  border-radius: 2px;
  background: #565656;
  color: white;
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
  console.log(productId);
  const user = useSelector((state) => state.user);
  const commentBox = useRef(null);

  const [commentValue, setCommentValue] = useState("");
  const [commentLists, setCommentLists] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const handleComment = (e) => {
    setCommentValue(e.currentTarget.textContent);
  };

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.post("/api/comment/getComments", { productId });
      if (res.data.success) {
        setCommentLists(res.data.comments);
      }
    };
    getComments();
  }, [productId]);

  const handleKeyPress = async (e) => {
    if (e.target.textContent !== "" && e.key === "Enter") {
      e.target.textContent = "";
      e.preventDefault();

      try {
        const variables = {
          content: commentValue,
          writer: user.userData._id,
          productId,
        };

        const res = await axios.post("/api/comment/saveComment", variables);
        if (res.data.success) {
          setCommentLists(commentLists.concat(res.data.result));
          setCommentValue("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmit = () => {
    handleKeyPress();
  };

  const handleClickCancel = () => {
    setShowBtn(false);
    commentBox.current.textContent = "";
  };

  return (
    <CommentWrapper>
      <TotalComment>후기 {commentLists.length}개</TotalComment>
      <div>
        <Writer>{user.userData.name}</Writer>
        <CommentBox
          placeholder="댓글을 입력하세요."
          contentEditable
          onInput={handleComment}
          onClick={() => setShowBtn(true)}
          onKeyPress={handleKeyPress}
          showBtn={showBtn}
          spellCheck={false}
          ref={commentBox}
        />
        {showBtn ? (
          <BtnWrapper>
            <Btn onClick={handleClickCancel}>취소</Btn>
            <Btn onClick={handleSubmit}>댓글</Btn>
          </BtnWrapper>
        ) : null}
      </div>
      <CommentLists commentLists={commentLists} />
    </CommentWrapper>
  );
};

export default React.memo(Comment);
