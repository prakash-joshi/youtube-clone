import * as types from "../actionTypes";

export const getVideoComments = (url, videoId) => {
  return {
    type: types.GET_VIDEO_COMMENTS,
    meta: {
      type: "api",
      method: "GET",
      url,
      videoId,
    },
  };
};
