import { Container, TitleMin } from "@/components";
import { SkeletonItemPicture } from "@/components/ItemPicture/SkeletonItemPicture";
import { deezer } from "@/services/DeezerAPI";
import { FC, useCallback, useEffect, useState } from "react";
import { PiPlayCircleFill } from "react-icons/pi";

export const AllArtists: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAlbum = useCallback(async () => {
    setLoading(true);
    const { artists } = await deezer.getEditorialChart();
    setLoading(false);
    setData(artists.data);
    console.log(artists.data);
  }, []);

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <Container className="text-slate-200">
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
          {data?.map(({ id, picture_medium, name }, key) => {
            return (
              <a
                key={key}
                href={`ViewAlbum?id=${id}`}
                className="bg bg-slate-900 bg-opacity-50 hover:bg-slate-800 rounded-md p-4 "
              >
                <div className="content-hover-options text-slate-200">
                  <div
                    style={{ backgroundImage: `url('${picture_medium}')` }}
                    className={`h-48 w-48 bg-cover rounded-md`}
                  ></div>

                  <div className="hover-options text-cyan-400 flex justify-end">
                    <a className="cursor-pointer">
                      <PiPlayCircleFill className="icon" />
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
          })}
        </div>
      )}
    </Container>
  );
};
