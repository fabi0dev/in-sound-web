import { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectorplayer, setPaused, setTrack } from "@/store/reducers/player";

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
  index: number;
}

export const TrackItem: FC<TrackItemProps> = ({
  data,
  index = 0,
  ...props
}) => {
  const dispatch = useDispatch();
  const { id, paused } = useSelector(selectorplayer);

  return (
    <div
      {...props}
      data-current={id == data.id ? true : false}
      className="grid grid-cols-4 hover:bg-slate-900 p-3 cursor-default data-[current=true]:text-cyan-500"
    >
      <div className="flex">
        <div
          className="track-album w-8 h-8 bg-cover rounded-sm items-center justify-center flex"
          style={{
            backgroundImage: `url(${data.album.cover_medium})`,
          }}
          onClick={() => {
            dispatch(setTrack(data));
            if (data.id == id) {
              dispatch(setPaused(!paused));
            }
          }}
        >
          <FaPlay className="icon w-6 h-6" />
        </div>
        <div className="truncate ml-3 flex">
          <div className="mr-2">{index + 1}. </div>
          <div>
            <div>{data.title}</div>
            <div className="text-xs text-slate-400">{data.artist.name}</div>
          </div>
        </div>
      </div>
      <div className="flex text-xl justify-center items-center">
        <FaRegHeart />
      </div>

      <div>{data.album.title}</div>

      <div>0:30</div>
    </div>
  );
};
