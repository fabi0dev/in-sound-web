import { Container, TitleMin } from "@/components";
import { SkeletonItemPicture } from "@/components/ItemPicture/SkeletonItemPicture";
import { ItemPicturePlaylist } from "@/components/ItemPicturePlaylist";
import { deezer } from "@/services/DeezerAPI";
import { FC, useCallback, useEffect, useState } from "react";

export const AllPlaylists: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAlbum = useCallback(async () => {
    setLoading(true);
    const { playlists } = await deezer.getEditorialChart();
    setLoading(false);
    setData(playlists.data);
  }, []);

  useEffect(() => {
    getAlbum();
  }, [getAlbum]);

  return (
    <Container title="Playlists populares" className="text-slate-200">
      <TitleMin>Playlists populares</TitleMin>
      {loading && (
        <div className="flex flex-wrap gap-5 justify-start">
          <SkeletonItemPicture />
          <SkeletonItemPicture />
          <SkeletonItemPicture />
          <SkeletonItemPicture />
          <SkeletonItemPicture />
        </div>
      )}

      {!loading && (
        <div className="flex flex-wrap gap-5 justify-start">
          {data?.map((playlist, index) => {
            return (
              <ItemPicturePlaylist data={playlist} index={index} key={index} />
            );
          })}
        </div>
      )}
    </Container>
  );
};
