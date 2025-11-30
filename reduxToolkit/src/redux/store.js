import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counter/count";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
