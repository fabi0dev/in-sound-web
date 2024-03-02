import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";

export const ContentTracks: FC = () => {
  const {
    tracks: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <div className="text-2xl font-bold text-slate-300 my-10">Músicas</div>
      <div className="flex gap-5 overflow-x-hidden">
        {data?.map((track, key) => {
          return (
            <div className=" text-slate-200 " key={key}>
              <div
                style={{
                  backgroundImage: `url('${track.album.cover_medium}')`,
                }}
                className={`h-40 w-40 bg-cover rounded-2xl`}
              ></div>
              <div>
                <div className="w-40 mt-4 text-[15px] font-semibold truncate">
                  {track.title}
                </div>
                <div className="text-slate-600 mt-1 text-sm font-semibold truncate">
                  {track.artist.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
