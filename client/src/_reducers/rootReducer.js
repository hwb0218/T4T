import { combineReducers } from "redux";
import user from "./userReducer";
import filters from "./filterReducer";

const rootReducer = combineReducers({
  user,
  filters,
});

export default rootReducer;
