import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Rating from "../../Rating/Rating";
import { FaRegCommentDots } from "react-icons/fa/index";

const ReviewWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
`;

const TotalReview = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ReviewList = styled.ul`
  background: #f2f2f2;
  padding: 0.5rem 0.5rem;
`;

const ReviewContent = styled.li`
  & + & {
    padding-top: 0.5rem;
    margin-top: 1rem;
    border-top: 1px solid #e5e5e5;
  }
`;

const Writer = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 2px 6px;
  border-radius: 2px;
  background: #565656;
  color: white;
  font-size: 15px;
`;

const CreatedDate = styled.span`
  margin: 0 0.5rem;
  font-size: 11px;
  color: #b4b4b4;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 12px;
  color: #5f5f5f;
`;

export const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyComment = styled(FaRegCommentDots)`
  margin-bottom: 5px;
  font-size: 3rem;
  color: #5f5f5f;
`;

const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const variables = { product: productId };
        const res = await axios.post("/api/review/getReview", variables);
        setReviews(res.data.review);
      } catch (err) {
        console.error(err);
      }
    };
    getReview();
  }, [productId]);

  return (
    <>
      <ReviewWrapper>
        <TotalReview>리뷰 {reviews.length}건</TotalReview>
        <ReviewList>
          {reviews.length > 0 ? (
            reviews.map(({ createdDate, rating, review, writer, _id }) => (
              <ReviewContent key={_id}>
                <Writer>{writer.name}</Writer>
                <CreatedDate>{createdDate}</CreatedDate>
                <Rating value={rating} />
                <Content>{review}</Content>
              </ReviewContent>
            ))
          ) : (
            <EmptyBox>
              <EmptyComment />
              <Content>아직 작성된 리뷰가 없습니다.</Content>
            </EmptyBox>
          )}
        </ReviewList>
      </ReviewWrapper>
    </>
  );
};

export default Review;
