import initialState from "../initialState";
import * as types from "../actionTypes";

export default function sideBarMenuReducer(state = initialState.sideBarMenu, action) {
  switch (action.type) {
    case types.SIDE_BAR_MENU_VISIBLE:
      return { ...state, isSideMenuExpanded: !state.isSideMenuExpanded };
    case types.SIDE_BAR_MENU_COLLPASED:
      return { ...state, isSideMenuExpanded: false };
    default:
      return state;
  }
}
