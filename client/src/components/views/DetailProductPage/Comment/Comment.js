import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { setComments } from "../../../../_actions/commentActions";

const Comment = ({ productId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.post("/api/comment/getComments", {
          productId,
        });
        dispatch(setComments(res.data.comments));
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
  }, [productId]);

  return (
    <CommentContainer>
      <TotalComment>Q&A {comments.length}건</TotalComment>
      <CommentBox user={user} productId={productId} />
      <CommentListsWrapper>
        {comments.length > 0 ? (
          <SingleComment
            commentLists={comments}
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
