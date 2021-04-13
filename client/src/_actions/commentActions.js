import { COMMENTS } from "./types";

export const setComments = (comments) => {
  return {
    type: COMMENTS,
    payload: comments,
  };
};
