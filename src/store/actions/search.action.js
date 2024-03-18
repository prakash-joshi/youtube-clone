import * as types from "../actionTypes";

export const getSearchSuggestion = (url, searchString) => {
  return {
    type: types.GET_YOUTUBE_SEARCH_SUGGESTIONS,
    meta: {
      type: "api",
      method: "GET",
      url: url + searchString,
      searchString,
    },
  };
};

export const getSearchResultVideos = (url, searchString) => {
  return {
    type: types.GET_SEARCH_RESULT_VIDEOS,
    meta: {
      type: "api",
      method: "GET",
      url,
      searchString,
    },
  };
};
