import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideMenuExpanded: true,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isSideMenuExpanded = !state.isSideMenuExpanded;
    },
  },
});
export const { toggleSideMenu } = appSlice.actions;
export default appSlice.reducer;
