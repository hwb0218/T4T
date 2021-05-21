import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import {
  CommentContainer,
  TotalComment,
  EmptyComment,
  EmptyBox,
  Content,
  CommentListsWrapper,
} from "./CommentElements";

const Comment = ({ productId }) => {
  const user = useSelector((state) => state.user);

  const [commentLists, setCommentLists] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.post("/api/comment/getComments", {
          productId,
        });
        setCommentLists(res.data.comments);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
  }, [productId]);

  const updateComment = (newComment) => {
    setCommentLists(newComment.concat(commentLists));
  };

  return (
    <CommentContainer>
      <TotalComment>Q&A {commentLists.length}건</TotalComment>
      <CommentBox
        user={user}
        productId={productId}
        updateComment={updateComment}
      />
      <CommentListsWrapper>
        {commentLists.length > 0 ? (
          <SingleComment
            commentLists={commentLists}
            productId={productId}
            user={user}
          />
        ) : (
          <EmptyBox>
            <EmptyComment />
            <Content>작성된 Q&A가 없습니다.</Content>
          </EmptyBox>
        )}
      </CommentListsWrapper>
    </CommentContainer>
  );
};

export default React.memo(Comment);
