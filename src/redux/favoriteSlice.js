import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favoriteTeacher: [],
};

const favoriteTeacherSlice = createSlice({
  name: "favoriteTeacher",
  initialState: INITIAL_STATE,

  reducers: {
    changeFavorite(state, { payload }) {
      const idx = state.favoriteTeacher.findIndex(
        (item) => item.id === payload.id
      );
      if (idx === -1) {
        state.favoriteTeacher.push(payload);
      } else {
        state.favoriteTeacher.splice(idx, 1);
      }
    },
    clearFavorite(state) {
      state.favoriteTeacher = [];
    },
  },
});

export const favoriteTeacherReducer = favoriteTeacherSlice.reducer;
export const { changeFavorite, clearFavorite } = favoriteTeacherSlice.actions;
