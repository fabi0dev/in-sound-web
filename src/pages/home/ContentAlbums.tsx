import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";

export const ContentAlbums: FC = () => {
  const {
    albums: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <div className="flex justify-between text-2xl font-bold text-slate-300 my-10">
        Albuns
        <a href="#" className="text-[15px]">
          Ver todos
        </a>
      </div>
      <div className="flex gap-5 overflow-x-hidden">
        {data?.map((album, key) => {
          return (
            <div className=" text-slate-200 " key={key}>
              <div
                style={{ backgroundImage: `url('${album.cover_medium}')` }}
                className={`h-56 w-56 bg-cover rounded-md`}
              ></div>
              <div>
                <div className="w-56 mt-4 text-[15px] font-semibold truncate">
                  {album.title}
                </div>
                <div className="text-slate-600 mt-1 text-sm font-semibold">
                  {album.artist.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};