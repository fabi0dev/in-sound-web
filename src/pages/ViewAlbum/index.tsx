import { Button, Container } from "@/components";
import { deezer } from "@/services/DeezerAPI";
import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { SkeletonAlbum } from "./SkeletonAlbum";
import { FaRegHeart } from "react-icons/fa";

interface IALbum {
  artist: {
    id: number;
    link: string;
    name: string;
    picture: string;
    picture_big: string;
    picture_medium: string;
    picture_small: string;
    picture_xl: string;
    tracklist: string;
    type: string;
  };
  tracks: {
    data: Array<{
      id: number;
      preview: string;
      title: string;
      title_short: string;
      duration: number;
      artist: {
        id: number;
        name: string;
      };
    }>;
  };
  id: number;
  title: string;
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  link: string;
  tracklist: string;
  nb_tracks: number;
  genre_id: number;
  fans: number;
}

export const ViewAlbum: FC = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<IALbum | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await deezer.getAlbum(searchParams.get("id"));
    setLoading(false);
    setData(response);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container className="text-slate-200">
      {loading && <SkeletonAlbum />}
      {!loading && (
        <div>
          <div className="flex mt-7 ">
            <div
              className="w-60 h-60 rounded-md mr-5"
              style={{ backgroundImage: `url(${data?.cover_medium})` }}
            ></div>

            <div>
              <div className="text-3xl font-bold">{data?.title}</div>
              <div className="text-xs flex items-center mt-4">
                <div
                  className="w-6 h-6 rounded-full bg-cover mr-2"
                  style={{
                    backgroundImage: `url(${data?.artist.picture_medium})`,
                  }}
                ></div>
                {data?.artist.name}
              </div>
              <div className="text-slate-400 mt-2">
                {data?.nb_tracks} Músicas | {data?.fans} Fãs
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Button icon={<FaPlay />}>Ouvir</Button>
          </div>

          <div>
            <div className="grid grid-cols-3 border-b-[1px] mb-5 mt-10 p-3">
              <div className="font-bold ">Músicas</div>
              <div className="font-bold "></div>
              <div className="font-bold ">Duração</div>
            </div>

            {data?.tracks.data.map((track, key) => {
              return (
                <div
                  key={key}
                  className="grid grid-cols-3 hover:bg-slate-900 p-3 cursor-default"
                >
                  <div className="flex ">
                    <div
                      className="w-8 h-8 bg-cover rounded-sm "
                      style={{ backgroundImage: `url(${data.cover_medium})` }}
                    ></div>
                    <div className="truncate ml-3 ">
                      {key + 1}. {track.title}
                    </div>
                  </div>
                  <div className="flex text-xl justify-center items-center">
                    <FaRegHeart />
                  </div>
                  <div>0:30</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};
