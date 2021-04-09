import { SEARCH_DATA } from "./types";

export const updateSearchData = (newSearchData) => {
  return {
    type: SEARCH_DATA,
    payload: newSearchData,
  };
};
