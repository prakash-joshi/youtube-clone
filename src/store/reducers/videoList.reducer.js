import initialState from "../initialState";
import * as types from "../actionTypes";

export default function videoListReducer(state = initialState.videoList, action) {
  switch (action.type) {
    case types.GET_VIDEO_LIST:
      return action.response;
    default:
      return state;
  }
}
