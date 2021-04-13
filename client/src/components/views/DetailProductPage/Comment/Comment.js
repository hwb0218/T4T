import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  margin-top: 1rem;
`;

const Comment = () => {
  return (
    <CommentContainer>
      <p>댓글</p>
    </CommentContainer>
  );
};

export default Comment;
