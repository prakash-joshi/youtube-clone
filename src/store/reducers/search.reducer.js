import initialState from "../initialState";
import * as types from "../actionTypes";

export default function serachReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.GET_YOUTUBE_SEARCH_SUGGESTIONS:
      return { ...state, searchSuggestions: action.response[1] };
    default:
      return state;
  }
}
