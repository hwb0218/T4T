import { PAGE_NUMBER_LIMIT } from "./types";

export const minMaxPageNumberLimit = (type, pageNumber) => {
  return {
    type: PAGE_NUMBER_LIMIT,
    payload: { type, pageNumber },
  };
};
