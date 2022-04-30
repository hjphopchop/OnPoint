import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  slidesCount: 2,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    slideNext: (state) => {
      if (state.value < 0) {
        state.value = 0;
      } else if (state.value === state.slidesCount) {
        state.value = state.slidesCount - 1;
      }
      state.value = state.value + 1;
    },
    slidePrev: (state) => {
      if (state.value < 0) {
        state.value = 0;
      } else if (state.value > state.slidesCount) {
        state.value = state.slidesCount - 1;
      }
      state.value = state.value - 1;
    },

    slideHome: (state) => {
        state.value = 0
    }
  },
});

export const { slideNext, slidePrev, slideHome } = carouselSlice.actions;

export default carouselSlice.reducer;
