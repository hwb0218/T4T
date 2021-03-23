import { combineReducers } from "redux";
import user from "./userReducer";
import fileUpload from "./fileUploadReducer";

const rootReducer = combineReducers({
  user,
  fileUpload,
});

export default rootReducer;