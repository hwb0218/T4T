import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import user from "./userReducer";
import filters from "./filterReducer";
import searchData from "./searchTermReducer";
import comments from "./commentReducer";
import review from "./reviewReducer";
import pagination from "./paginationReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user", "review", "pagination", "searchData"],
};

const rootReducer = combineReducers({
  user,
  filters,
  searchData,
  comments,
  review,
  pagination,
});

export default persistReducer(persistConfig, rootReducer);
