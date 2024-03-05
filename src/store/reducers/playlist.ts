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

interface IPlaylist {
  tracks: Array<TrackProps>;
}

export const slice = createSlice({
  name: "playlist",
  initialState: {
    tracks: [],
  },
  reducers: {
    addTrackPlaylist(state, { payload }) {
      const isAdd = state.tracks.filter(
        (item: TrackProps) => item.id == payload.id
      );

      console.log(state.tracks);

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
    removeTrackPlaylist(state, { payload }) {
      const tracks = state.tracks.filter(
        (item: TrackProps) => item.id != payload.id
      );

      return {
        ...state,
        tracks,
      };
    },
    clearPlaylist(state) {
      return {
        ...state,
        tracks: [],
      };
    },
  },
});

export default slice.reducer;
export const { addTrackPlaylist, clearPlaylist, removeTrackPlaylist } =
  slice.actions;
export const selectPlaylist = (state: { playlist: IPlaylist }) =>
  state.playlist;
