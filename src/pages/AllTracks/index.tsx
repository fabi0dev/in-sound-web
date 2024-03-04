import { Container, ItemPicture, TitleMin } from "@/components";
import { SkeletonItemPicture } from "@/components/ItemPicture/SkeletonItemPicture";
import { deezer } from "@/services/DeezerAPI";
import { setTrack } from "@/store/reducers/player";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const AllTracks: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAlbum = useCallback(async () => {
    setLoading(true);
    const { tracks } = await deezer.getEditorialChart();
    setLoading(false);
    setData(tracks.data);
  }, []);

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <Container className="text-slate-200">
      <TitleMin>Músicas populares</TitleMin>
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
          {data?.map((track, index) => {
            return (
              <ItemPicture
                onPlay={() => dispatch(setTrack(track))}
                data={track}
                key={index}
              />
            );
          })}
        </div>
      )}
    </Container>
  );
};
