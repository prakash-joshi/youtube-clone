import { combineReducers } from "@reduxjs/toolkit";
import sideBarMenuReducer from "./reducers/sideBar.reducer";
import videoListReducer from "./reducers/videoList.reducer";
import serachReducer from "./reducers/search.reducer";

const rootReducer = combineReducers({
  sideBarMenu: sideBarMenuReducer,
  videoList: videoListReducer,
  search: serachReducer,
});
export default rootReducer;
