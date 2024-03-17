import initialState from "../initialState";
import * as types from "../actionTypes";

export default function commentsReducer(state = initialState.commentsList, action) {
  switch (action.type) {
    case types.GET_VIDEO_COMMENTS:
      const response = { [action.meta.videoId]: action.response.items };
      return { ...state, ...response };
    default:
      return state;
  }
}
