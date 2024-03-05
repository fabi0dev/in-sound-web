import { FC } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectorPlayer, setPaused, setTrack } from "@/store/reducers/player";
import {
  addTrack,
  removeTrack,
  selectFavorites,
} from "@/store/reducers/favorites";
import { cn } from "@/lib/utils";

interface TrackItemProps {
  data: {
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
  };
  index: number | null;
  basic?: boolean;
}

export const TrackItem: FC<TrackItemProps> = ({
  data,
  index = 0,
  basic,
  ...props
}) => {
  const dispatch = useDispatch();
  const { current, paused } = useSelector(selectorPlayer);
  const { tracks } = useSelector(selectFavorites);

  const favoriteMusic = async () => {
    if (!favCheck()) {
      dispatch(addTrack(data));
    } else {
      dispatch(removeTrack(data));
    }
  };

  const favCheck = () => {
    const isFav = tracks.filter((item) => item.id == data.id);

    if (isFav.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div
      {...props}
      data-current={current.id == data.id ? true : false}
      data-basic={basic}
      className={cn(
        "data-[basic=true]:grid-cols-2 text-slate-200",
        "grid grid-cols-4 hover:bg-slate-900 p-3 cursor-default",
        "data-[current=true]:text-cyan-500"
      )}
    >
      <div className="flex">
        <div
          className="track-album w-10 h-10 bg-cover rounded-sm items-center justify-center flex"
          style={{
            backgroundImage: `url(${data.album.cover_medium})`,
          }}
          onClick={() => {
            dispatch(setTrack(data));
            if (data.id == current.id) {
              dispatch(setPaused(!paused));
            }
          }}
        >
          <FaPlay className="icon w-6 h-6" />
        </div>
        <div className="ml-3 flex">
          {index != null && <div className="mr-2">{index + 1}. </div>}
          <div>
            <div className="truncate w-full">{data.title}</div>
            <div className="text-xs text-slate-400">
              <a
                href={`#ViewArtist?id=${data.artist.id}`}
                className="hover:underline"
              >
                {data.artist.name}
              </a>
            </div>
          </div>
        </div>
      </div>

      {!basic && (
        <div className="flex text-xl justify-center items-center">
          <span onClick={() => favoriteMusic()}>
            {!favCheck() && <FaRegHeart />}
            {favCheck() && <FaHeart />}
          </span>
        </div>
      )}

      {!basic && (
        <div>
          <a
            href={`#ViewAlbum?id=${data.album.id}`}
            className="hover:underline"
          >
            {data.album.title}
          </a>
        </div>
      )}

      <div className="w-5">0:30</div>
    </div>
  );
};
