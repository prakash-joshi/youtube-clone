import { combineReducers } from "@reduxjs/toolkit";
import sideBarMenuReducer from "./reducers/sideBar.reducer";
import videoListReducer from "./reducers/videoList.reducer";
import searchReducer from "./reducers/search.reducer";
import commentsReducer from "./reducers/comments.reducer";

const rootReducer = combineReducers({
  sideBarMenu: sideBarMenuReducer,
  videoList: videoListReducer,
  search: searchReducer,
  commentsList: commentsReducer,
});
export default rootReducer;
