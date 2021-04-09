import { combineReducers } from "redux";
import user from "./userReducer";
import filters from "./filterReducer";
import searchData from "./searchDataReducer";

const rootReducer = combineReducers({
  user,
  filters,
  searchData,
});

export default rootReducer;
