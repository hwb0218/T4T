import { combineReducers } from "redux";
import user from "./userReducer";
import filters from "./filterReducer";
import searchData from "./searchTermReducer";
import comments from "./commentReducer";

const rootReducer = combineReducers({
  user,
  filters,
  searchData,
  comments,
});

export default rootReducer;
