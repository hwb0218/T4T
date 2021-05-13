import { PAGE_NUMBER_LIMIT } from "../_actions/types";

const pageNumberLimit = 3;

const initialState = {
  minPageNumberLimit: 0,
  maxPageNumberLimit: pageNumberLimit,
  pageNumberLimit,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_NUMBER_LIMIT:
      const pageNumber = {
        [action.payload.type]: action.payload.pageNumber,
      };
      return { ...state, ...pageNumber };
    default:
      return state;
  }
};

export default paginationReducer;
