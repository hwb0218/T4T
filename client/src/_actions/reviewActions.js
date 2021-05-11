import { RATING, REVIEW, PRODUCT_DETAIL } from "./types";

export const setRating = (rating) => {
  return {
    type: RATING,
    payload: rating,
  };
};

export const setReviewContent = (text) => {
  return {
    type: REVIEW,
    payload: text,
  };
};

export const setProductDetail = (productDetailId) => {
  return {
    type: PRODUCT_DETAIL,
    payload: productDetailId,
  };
};
