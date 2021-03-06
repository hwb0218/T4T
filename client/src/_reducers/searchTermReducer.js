import { SEARCH_TERM } from "../_actions/types";

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default searchTermReducer;
