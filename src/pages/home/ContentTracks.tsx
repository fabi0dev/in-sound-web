import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { TitleDivider } from "./TitleDivider";
import { PiPlayCircleFill } from "react-icons/pi";

export const ContentTracks: FC = () => {
  const {
    tracks: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider title="Músicas" href="#" />
      <div className="flex gap-5 justify-between overflow-x-hidden">
        {data?.map((track, key) => {
          if (key <= 5) {
            return (
              <div
                key={key}
                className="bg bg-slate-900 hover:bg-slate-800 rounded-md p-4 "
              >
                <div className="content-hover-options text-slate-200 ">
                  <div
                    style={{
                      backgroundImage: `url('${track.album.cover_medium}')`,
                    }}
                    className={`h-48 w-48 bg-cover rounded-2xl`}
                  ></div>

                  <div className="hover-options text-cyan-400 flex justify-end">
                    <a className="cursor-pointer">
                      <PiPlayCircleFill className="icon shadow-black " />
                    </a>
                  </div>

                  <div>
                    <div className="w-48 mt-4 text-[15px] font-semibold truncate">
                      {track.title}
                    </div>
                    <div className="text-slate-600 mt-1 text-sm font-semibold truncate">
                      {track.artist.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
