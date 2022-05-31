import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { showPlace: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showContinent(state, action) {
      state.showPlace = `state.showPlace + ${action.payload}`;
    },
    showCountry(state, action) {
      state.showPlace = state.showPlace + action.payload;
    },
  },
});

const store = configureStore({
  reducer: searchSlice.reducer,
});

export const searchActions = searchSlice.actions;
export default store;
