import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { TitleDivider } from "./TitleDivider";
import { PiPlayCircleFill } from "react-icons/pi";

export const ContentAlbums: FC = () => {
  const {
    albums: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider title="Albuns Populares" href={`#`} className={"mt-5"} />
      <div className="flex gap-5 justify-between overflow-x-hidden">
        {data?.map(({ id, cover_medium, title, artist }, key) => {
          if (key <= 5) {
            return (
              <a
                key={key}
                href={`ViewAlbum?id=${id}`}
                className="bg bg-slate-900 bg-opacity-50 hover:bg-slate-800 rounded-md p-4 "
              >
                <div className="content-hover-options text-slate-200">
                  <div
                    style={{ backgroundImage: `url('${cover_medium}')` }}
                    className={`h-48 w-48 bg-cover rounded-md`}
                  ></div>

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
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};
