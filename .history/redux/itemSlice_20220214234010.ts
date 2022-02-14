import { createSlice } from "@reduxjs/toolkit";

export const incrementSlice = createSlice({
  name: "items",
  initialState: {
    items: ["Orange", "Apple"],
  },
  reducers: {
    increment: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});
