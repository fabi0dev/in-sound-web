import { playPlaylist } from "@/lib/utils";
import { FC } from "react";
import { PiPlayCircleFill } from "react-icons/pi";

interface ItemPicturePlaylistProps {
  data: {
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
  };
  index: number;
}

export const ItemPicturePlaylist: FC<ItemPicturePlaylistProps> = ({
  data: { id, title, picture_medium },
  index,
}) => {
  return (
    <div
      key={index}
      className="bg bg-slate-900 hover:bg-slate-800 rounded-md p-4 "
    >
      <div className="content-hover-options text-slate-200 ">
        <a href={`#ViewPlaylist?id=${id}`}>
          <div
            style={{
              backgroundImage: `url('${picture_medium}')`,
            }}
            className={`h-48 w-48 bg-cover rounded-2xl`}
          ></div>
        </a>

        <div className="hover-options text-cyan-400 flex justify-end">
          <a onClick={() => playPlaylist(id)} className="cursor-pointer">
            <PiPlayCircleFill className="icon shadow-black " />
          </a>
        </div>

        <div>
          <div className="w-48 mt-4 text-[15px] font-semibold truncate">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
