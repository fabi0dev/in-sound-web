import { TitleDivider } from "@/components/TitleDivider";
import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { SkeletonPicture } from "./SkeletonPicture";
import { ItemPictureArtist } from "@/components";

export const ContentArtists: FC = () => {
  const {
    artists: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider title="Artistas" href="AllArtists" />
      {data?.length == 0 && <SkeletonPicture />}

      <div className="flex gap-5 overflow-x-hidden justify-start">
        {data?.map((artist, index) => {
          if (index <= 5) {
            return (
              <ItemPictureArtist data={artist} index={index} key={index} />
            );
          }
        })}
      </div>
    </div>
  );
};
