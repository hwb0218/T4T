import { SEARCH_TERM } from "./types";

export const updateSearchTerm = (newSearchData) => {
  return {
    type: SEARCH_TERM,
    payload: newSearchData,
  };
};
