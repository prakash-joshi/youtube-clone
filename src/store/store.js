import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/api-middleware";
import initialState from "./initialState";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  initialState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});
export default store;
