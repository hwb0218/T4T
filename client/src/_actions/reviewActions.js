import { RATING, REVIEW } from "./types";

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
