import { createSlice } from "@reduxjs/toolkit";

interface EditorialChartProps {
  albums: {
    data?: Array<{
      artist: {
        id: number;
        link: string;
        name: string;
        picture: string;
        picture_big: string;
        picture_medium: string;
        picture_small: string;
        picture_xl: string;
        tracklist: string;
        type: string;
      };
      id: number;
      title: string;
      cover: string;
      cover_big: string;
      cover_medium: string;
      cover_small: string;
      cover_xl: string;
      link: string;
      tracklist: string;
    }>;
    total: number;
  };
  artists: {
    data?: Array<{
      id: number;
      link: string;
      name: string;
      picture: string;
      picture_big: string;
      picture_medium: string;
      picture_small: string;
      picture_xl: string;
      tracklist: string;
    }>;
    total: number;
  };
  playlists: {
    data?: Array<{
      id: number;
      title: string;
      link: string;
      nb_tracks: string;
      picture: string;
      picture_big: string;
      picture_medium: string;
      picture_small: string;
      picture_xl: string;
      tracklist: string;
    }>;
    total: number;
  };
  podcasts: {
    data?: Array<{
      id: number;
      fans: number;
      title: string;
      picture: string;
      picture_big: string;
      picture_medium: string;
      picture_small: string;
      picture_xl: string;
    }>;
    total: number;
  };
  tracks: {
    data?: Array<{
      album: {
        id: number;
        title: string;
        cover: string;
        cover_big: string;
        cover_medium: string;
        cover_small: string;
        cover_xl: string;
      };
      artist: {
        id: number;
        link: string;
        name: string;
        picture: string;
        picture_big: string;
        picture_medium: string;
        picture_small: string;
        picture_xl: string;
        tracklist: string;
      };
      id: number;
      duration: number;
      title: string;
      title_short: string;
    }>;
    total: number;
  };
}

const initialState: EditorialChartProps = {
  albums: {
    data: [],
    total: 0,
  },
  artists: {
    data: [],
    total: 0,
  },
  playlists: {
    data: [],
    total: 0,
  },
  podcasts: {
    data: [],
    total: 0,
  },
  tracks: {
    data: [],
    total: 0,
  },
};

export const slice = createSlice({
  name: "editorialChart",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { setData } = slice.actions;
export default slice.reducer;
export const selectorEditorialChart = (state: {
  editorialChart: EditorialChartProps;
}): EditorialChartProps => state.editorialChart;
