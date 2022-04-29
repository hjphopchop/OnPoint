import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselSlice";

export const store = configureStore({
  reducer: {
    carousell: carouselReducer,
  },
});
