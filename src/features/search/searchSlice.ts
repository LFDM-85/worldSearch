import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, event) => {
      state.value = event.target.value;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
