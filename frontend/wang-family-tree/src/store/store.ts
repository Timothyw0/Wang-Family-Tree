import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import zoomReducer from "./zoomSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    zoom: zoomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
