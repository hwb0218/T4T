import { FILTER } from "../_actions/types";

const initialState = {
  destination: [],
  price: [],
  rating: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      const checked = {
        [action.payload.category]: action.payload.newChecked,
      };
      return { ...state, ...checked };
    default:
      return state;
  }
};

export default filterReducer;
