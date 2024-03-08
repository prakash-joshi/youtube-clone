import { combineReducers } from "@reduxjs/toolkit";
import sideBarMenuReducer from "./reducers/sideBar.reducer";
import videoListReducer from "./reducers/videoList.reducer";

const rootReducer = combineReducers({ sideBarMenu: sideBarMenuReducer, videoList: videoListReducer });
export default rootReducer;
