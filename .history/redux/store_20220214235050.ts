import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

export const store = configureStore({
  reducer: {
    updateItem: itemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
