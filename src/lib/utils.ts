import { deezer } from "@/services/DeezerAPI";
import { clearPlayer, setPlaylist } from "@/store/reducers/player";
import { store } from "@/store/store";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertTime = (duration: number) => {
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
};

export const playArtist = async (id: number) => {
  const { data } = await deezer.getArtistTopTrack(id.toString());
  const { dispatch } = store;
  dispatch(clearPlayer());
  dispatch(setPlaylist(data));
};

export const playPlaylist = async (id: number) => {
  const { tracks } = await deezer.getPlaylist(id.toString());
  const { dispatch } = store;
  dispatch(clearPlayer());
  dispatch(setPlaylist(tracks.data));
};
