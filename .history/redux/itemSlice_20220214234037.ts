import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
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

export const { increment } = itemSlice.actions;

export default itemSlice.reducer;
