import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CommentBox from "../CommentBox/CommentBox";
import SingleComment from "../SingleComment/SingleComment";
import {
  QnABtn,
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

  const [clickCommentBtn, setClickCommentBtn] = useState(false);
  const [type, setType] = useState("");

  const handleModifyCommentBtn = () => {
    setClickCommentBtn(true);
    setType("save");
  };

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
  }, [productId, dispatch]);

  return (
    <CommentContainer>
      <TotalComment>Q&A {comments.length}건</TotalComment>
      {user.userData.isAuth && !user.userData.isSeller && (
        <QnABtn
          clickCommentBtn={clickCommentBtn}
          onClick={handleModifyCommentBtn}
        >
          Q&A 작성하기
        </QnABtn>
      )}
      <CommentBox
        user={user}
        productId={productId}
        setClickCommentBtn={setClickCommentBtn}
        clickCommentBtn={clickCommentBtn}
        type={type}
      />
      <CommentListsWrapper>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <SingleComment
              key={comment._id}
              comment={comment}
              productId={productId}
              user={user}
              setClickCommentBtn={setClickCommentBtn}
            />
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
