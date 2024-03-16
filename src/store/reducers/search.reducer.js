import initialState from "../initialState";
import * as types from "../actionTypes";

export default function serachReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.GET_YOUTUBE_SEARCH_SUGGESTIONS:
      const res = { [action.meta.searchString]: action.response[1] };
      const newstate = { ...state.searchSuggestions, ...res };
      return { ...state, searchSuggestions: newstate };
    default:
      return state;
  }
}
