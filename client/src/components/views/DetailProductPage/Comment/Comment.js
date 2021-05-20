import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CommentBox from "../CommentBox/CommentBox";
import CommentLists from "../CommentLists/CommentLists";
import {
  CommentContainer,
  TotalComment,
  EmptyComment,
  EmptyBox,
  Content,
  CommentListsWrapper,
} from "./CommentElements";
import ReplyComment from "./ReplyComment";

const Comment = ({ productId }) => {
  const user = useSelector((state) => state.user);

  const [commentLists, setCommentLists] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.post("/api/comment/getComments", { productId });
      setCommentLists(res.data.comments);
    };
    getComments();
  }, [productId]);

  const saveComment = (prevComment) => {
    setCommentLists(prevComment.concat(commentLists));
  };

  return (
    <CommentContainer>
      <TotalComment>Q&A {commentLists.length}건</TotalComment>
      <CommentBox user={user} productId={productId} saveComment={saveComment} />
      <CommentListsWrapper>
        {commentLists.length > 0 ? (
          commentLists.map((comment) => (
            <Fragment key={comment._id}>
              <CommentLists
                user={user}
                comment={comment}
                productId={productId}
              />
              <ReplyComment />
            </Fragment>
          ))
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
