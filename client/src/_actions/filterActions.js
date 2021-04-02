import { FILTER, FILTER_RESULT } from "./types";

export const filter = (newChecked, category) => {
  return {
    type: FILTER,
    payload: { newChecked, category },
  };
};

export const filterResult = () => {
  return {
    type: FILTER_RESULT,
  };
};
