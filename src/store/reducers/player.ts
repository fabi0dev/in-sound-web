import { createSlice } from "@reduxjs/toolkit";

interface playerProps {
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
  paused: boolean;
  currentTime: number;
  volume: number;
}

const initialState = {
  volume: 0.2,
  currentTime: 0,
};

export const slice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        ...initialState,
        paused: false,
      };
    },
    setPaused: (state, { payload }) => {
      return {
        ...state,
        paused: payload,
      };
    },
    setCurrentTime: (state, { payload }) => {
      return {
        ...state,
        currentTime: payload,
      };
    },
  },
});

export const { setTrack, setPaused, setCurrentTime } = slice.actions;
export default slice.reducer;
export const selectorplayer = (state: { player: playerProps }): playerProps =>
  state.player;
