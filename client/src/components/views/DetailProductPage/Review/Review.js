import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "../../Rating/Rating";
import {
  ReviewWrapper,
  TotalReview,
  ReviewList,
  ReviewContent,
  Writer,
  CreatedDate,
  Content,
  EmptyBox,
  EmptyComment,
} from "./ReviewElements";
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

export default React.memo(Review);
