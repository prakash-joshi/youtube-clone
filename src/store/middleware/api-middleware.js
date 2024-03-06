import axios from "axios";

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== "api") {
    return next(action);
  }
  const { data, method, url } = action.meta;

  axios({ method, url, data }).then((response) => {
    action.response = response.data;
    next(action);
  });
};
export default apiMiddleware;
