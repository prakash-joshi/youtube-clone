import * as types from "../actionTypes";

export const getSearchSuggestion = (url) => {
  return {
    type: types.GET_YOUTUBE_SEARCH_SUGGESTIONS,
    meta: {
      type: "api",
      method: "GET",
      url,
    },
  };
};
