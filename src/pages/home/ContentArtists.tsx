import { TitleDivider } from "@/components/TitleDivider";
import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { SkeletonPicture } from "./SkeletonPicture";
import { PiPlayCircleFill } from "react-icons/pi";

export const ContentArtists: FC = () => {
  const {
    artists: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider title="Artistas" href="AllArtists" />
      {data?.length == 0 && <SkeletonPicture />}

      <div className="flex gap-5 overflow-x-hidden justify-start">
        {data?.map(({ id, picture_medium, name }, key) => {
          if (key <= 5) {
            return (
              <a
                key={key}
                href={`#ViewArtist?id=${id}`}
                className="bg bg-slate-900 hover:bg-slate-800 rounded-md p-4 "
              >
                <div className="content-hover-options text-slate-200 ">
                  <div
                    style={{
                      backgroundImage: `url('${picture_medium}')`,
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
                      {name}
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
