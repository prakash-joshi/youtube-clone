import { combineReducers } from "@reduxjs/toolkit";
import sideBarMenuReducer from "./reducers/sideBar.reducer";

const rootReducer = combineReducers({ sideBarMenu: sideBarMenuReducer });
export default rootReducer;
