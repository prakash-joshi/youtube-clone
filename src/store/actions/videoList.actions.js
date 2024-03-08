import * as types from "../actionTypes";

export const getVideoList = (url) => {
  return {
    type: types.GET_VIDEO_LIST,
    meta: {
      type: "api",
      method: "GET",
      url,
    },
  };
};
