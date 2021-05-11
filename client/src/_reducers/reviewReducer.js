import { RATING, REVIEW, PRODUCT_DETAIL } from "../_actions/types";

const initialState = {
  rating: 0,
  review: "",
  PRODUCT_DETAIL: {},
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATING:
      return { ...state, rating: action.payload };
    case REVIEW:
      return { ...state, review: action.payload };
    case PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
};

export default reviewReducer;
