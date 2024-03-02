import { createSlice } from "@reduxjs/toolkit";

interface favoritesProps {}
const initialState = {};

export const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      return {
        ...state,
        name: payload,
      };
    },
  },
});

export const { setData } = slice.actions;
export default slice.reducer;
export const selectorfavorites = (state: {
  favorites: favoritesProps;
}): favoritesProps => state.favorites;
