import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { TitleDivider } from "@/components";
import { SkeletonPicture } from "./SkeletonPicture";
import { ItemPicturePlaylist } from "@/components/ItemPicturePlaylist";

export const ContentPlaylists: FC = () => {
  const {
    playlists: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider title="Playlists Populares" href="AllPlaylists" />
      {data?.length == 0 && <SkeletonPicture />}

      <div className="flex gap-5 justify-start overflow-x-hidden">
        {data?.map((playlist, index) => {
          if (index <= 5) {
            return (
              <ItemPicturePlaylist data={playlist} index={index} key={index} />
            );
          }
        })}
      </div>
    </div>
  );
};
