import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import eventReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    event: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
