import { Container, ItemPictureArtist, TitleMin } from "@/components";
import { SkeletonItemPicture } from "@/components/ItemPicture/SkeletonItemPicture";
import { deezer } from "@/services/DeezerAPI";
import { FC, useCallback, useEffect, useState } from "react";

export const AllArtists: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAlbum = useCallback(async () => {
    setLoading(true);
    const { artists } = await deezer.getEditorialChart();
    setLoading(false);
    setData(artists.data);
  }, []);

  useEffect(() => {
    getAlbum();
  }, [getAlbum]);

  return (
    <Container title="Artists populares" className="text-slate-200">
      <TitleMin>Artists populares</TitleMin>
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
          {data?.map((artist, index) => {
            return <ItemPictureArtist data={artist} index={index} />;
          })}
        </div>
      )}
    </Container>
  );
};
