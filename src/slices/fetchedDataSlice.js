import { createSlice } from "@reduxjs/toolkit";

export const fetchedDataSlice = createSlice({
  name: "fetchedData",
  initialState: {
    value: null,
  },
  reducers: {
    fetchedData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchedData } = fetchedDataSlice.actions;

export default fetchedDataSlice.reducer;
