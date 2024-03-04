import { FC } from "react";
import { PiPlayCircleFill } from "react-icons/pi";

interface ItemPictureProps {
  data: {
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
  };
  href: string;
}

export const ItemPicture: FC<ItemPictureProps> = ({
  data: { cover_medium, title, artist },
  href,
}) => {
  return (
    <div className="bg bg-slate-900 bg-opacity-50 hover:bg-slate-800 rounded-md p-4 ">
      <div className="content-hover-options text-slate-200">
        <a
          href={href}
          className="bg bg-slate-900 bg-opacity-50 hover:bg-slate-800"
        >
          <div
            style={{ backgroundImage: `url('${cover_medium}')` }}
            className={`h-48 w-48 bg-cover rounded-md `}
          ></div>
        </a>

        <div className="hover-options text-cyan-400 flex justify-end">
          <a className="cursor-pointer">
            <PiPlayCircleFill className="icon" />
          </a>
        </div>

        <div>
          <div className="w-48 mt-4 text-[15px] font-semibold truncate">
            {title}
          </div>
          <div className="text-slate-600 text-sm font-semibold truncate">
            {artist.name}
          </div>
        </div>
      </div>
    </div>
  );
};
