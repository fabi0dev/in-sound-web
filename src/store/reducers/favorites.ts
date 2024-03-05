import { createSlice } from "@reduxjs/toolkit";
interface TrackProps {
  id: number;
  preview: string;
  title: string;
  title_short: string;
  duration: number;
  artist: {
    id: number;
    name: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
  };
}

interface IFavorites {
  tracks: Array<TrackProps>;
}

export const slice = createSlice({
  name: "favorites",
  initialState: {
    tracks: [],
  },
  reducers: {
    addTrack(state, { payload }) {
      const isAdd = state.tracks.filter(
        (item: TrackProps) => item.id == payload.id
      );

      if (isAdd.length > 0) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        tracks: [...state.tracks, payload as never],
      };
    },
    removeTrack(state, { payload }) {
      const tracks = state.tracks.filter(
        (item: TrackProps) => item.id != payload.id
      );

      return {
        ...state,
        tracks,
      };
    },
    clear(state) {
      return {
        ...state,
        tracks: [],
      };
    },
  },
});

export default slice.reducer;
export const { addTrack, clear, removeTrack } = slice.actions;
export const selectFavorites = (state: { favorites: IFavorites }) =>
  state.favorites;
