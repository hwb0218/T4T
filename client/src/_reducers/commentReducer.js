import { COMMENTS } from "../_actions/types";

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default commentReducer;
