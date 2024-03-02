import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";

export const ContentPlaylists: FC = () => {
  const {
    playlists: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <div className="text-2xl font-bold text-slate-300 my-10">Playlists</div>
      <div className="flex gap-5 overflow-x-hidden">
        {data?.map((playlist, key) => {
          return (
            <div className=" text-slate-200 " key={key}>
              <div
                style={{ backgroundImage: `url('${playlist.picture_medium}')` }}
                className={`h-40 w-40 bg-cover rounded-2xl`}
              ></div>
              <div>
                <div className="w-40 mt-4 text-[15px] font-semibold truncate">
                  {playlist.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
