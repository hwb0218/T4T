import { SEARCH_DATA } from "../_actions/types";

const searchDataReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default searchDataReducer;
