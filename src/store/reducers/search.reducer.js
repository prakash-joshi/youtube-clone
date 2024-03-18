import initialState from "../initialState";
import * as types from "../actionTypes";

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.GET_YOUTUBE_SEARCH_SUGGESTIONS:
      if (action.response) {
        const res = { [action.meta.searchString]: action.response[1] };
        const newstate = { ...state.searchSuggestions, ...res };
        return { ...state, searchSuggestions: newstate };
      }
      return state;
    case types.GET_SEARCH_RESULT_VIDEOS:
      if (action.response) {
        const res = { [action.meta.searchString]: action.response["items"] };
        const newstate = { ...state.searchResultVideo, ...res };
        return { ...state, searchResultVideo: newstate };
      }
      return state;
    default:
      return state;
  }
}
