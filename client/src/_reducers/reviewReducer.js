import { RATING, REVIEW } from "../_actions/types";

const initialState = {
  rating: 0,
  review: "",
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATING:
      return { ...state, rating: action.payload };
    case REVIEW:
      return { ...state, review: action.payload };
    default:
      return state;
  }
};

export default reviewReducer;
