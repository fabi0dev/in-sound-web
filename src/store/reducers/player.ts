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

interface PlayerProps {
  paused: boolean;
  currentTime: number;
  volume: number;
  playlist: Array<TrackProps>;
  current: TrackProps;
}

const initialState = {
  volume: 0.5,
  currentTime: 0,
  current: {
    id: 0,
  },
};

export const slice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setAudioHTML: (state, { payload }) => {
      return {
        ...state,
        audioHTML: payload,
      };
    },
    setTrack: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        paused: false,
        currentTime: 0,
        current: payload,
      };
    },
    setPlaylist: (state, { payload }) => {
      return {
        ...state,
        playlist: payload,
        current: payload.length > 0 ? payload[0] : [],
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
    setVolume: (state, { payload }) => {
      return {
        ...state,
        volume: payload,
      };
    },
    prevTrack: (state) => {
      const { playlist, current } = state as PlayerProps;
      let prev: TrackProps | null = null;
      playlist.map((track, index) => {
        if (track.id == current.id) {
          prev = playlist[index - 1] || playlist[0];
        }
      });

      if (!prev == null && playlist.length > 0) {
        prev = playlist[0];
      }

      return {
        ...state,
        paused: false,
        current: prev as TrackProps,
      };
    },
    nextTrack: (state) => {
      const { playlist, current } = state as PlayerProps;
      let next: TrackProps | null = null;
      playlist.map((track, index) => {
        if (track.id == current.id) {
          next = playlist[index + 1] || playlist[playlist.length - 1];
        }
      });

      if (!next == null && playlist.length > 0) {
        next = playlist[0];
      }

      return {
        ...state,
        paused: false,
        current: next as TrackProps,
      };
    },
  },
});

export const {
  setTrack,
  setPlaylist,
  setPaused,
  setCurrentTime,
  nextTrack,
  prevTrack,
  setVolume,
} = slice.actions;
export default slice.reducer;
export const selectorPlayer = (state: { player: PlayerProps }): PlayerProps =>
  state.player;
