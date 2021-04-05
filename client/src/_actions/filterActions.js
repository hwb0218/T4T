import { FILTER } from "./types";

export const filter = (newChecked, category) => {
  return {
    type: FILTER,
    payload: { newChecked, category },
  };
};
