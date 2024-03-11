import * as types from "../actionTypes";

export const togglesideBarMenu = () => {
  return { type: types.SIDE_BAR_MENU_VISIBLE };
};
export const collapseSideBarMenu = () => {
  return { type: types.SIDE_BAR_MENU_COLLPASED };
};
