import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { TitleDivider } from "./TitleDivider";

export const ContentArtists: FC = () => {
  const {
    artists: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider title="Artistas" href="#" />
      <div className="flex gap-10 overflow-x-hidden">
        {data?.map((artist, key) => {
          return (
            <div className=" text-slate-200 " key={key}>
              <div
                style={{ backgroundImage: `url('${artist.picture_medium}')` }}
                className={`h-40 w-40 bg-cover rounded-full`}
              ></div>
              <div>
                <div className="text-center w-40 mt-4 text-[15px] font-semibold truncate">
                  {artist.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
