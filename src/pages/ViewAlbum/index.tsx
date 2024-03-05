import { Button, Container, TrackItem } from "@/components";
import { deezer } from "@/services/DeezerAPI";
import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { SkeletonAlbum } from "./SkeletonAlbum";
import { useDispatch } from "react-redux";
import { setPlaylist } from "@/store/reducers/player";

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
      album: {
        id: number;
        title: string;
        cover: string;
        cover_big: string;
        cover_medium: string;
        cover_small: string;
        cover_xl: string;
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
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<IALbum | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await deezer.getAlbum(searchParams.get("id"));
    setLoading(false);
    setData(response);
  }, [searchParams]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container className="text-slate-200">
      {loading || (!data?.id && <SkeletonAlbum />)}
      {!loading && data?.id && (
        <div>
          <div className="flex mt-7">
            <div
              className="w-60 h-60 rounded-md mr-5"
              style={{ backgroundImage: `url(${data?.cover_medium})` }}
            ></div>

            <div className="mt-5">
              <div className="text-3xl font-bold ">{data?.title}</div>
              <div className="text-xs flex items-center mt-4">
                <div
                  className="w-6 h-6 rounded-full bg-cover mr-2"
                  style={{
                    backgroundImage: `url(${data?.artist.picture_medium})`,
                  }}
                ></div>
                <a
                  href={`#ViewArtist?id=${data.artist.id}`}
                  className="hover:underline"
                >
                  {data?.artist.name}
                </a>
              </div>
              <div className="text-slate-400 mt-2">
                {data?.nb_tracks} Músicas | {data?.fans} Fãs
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Button
              onClick={() => dispatch(setPlaylist(data?.tracks.data))}
              icon={<FaPlay />}
            >
              Ouvir
            </Button>
          </div>

          <div>
            <div className="grid grid-cols-4 border-b-[1px] mb-5 mt-10 p-3 text-[15px]">
              <div>Músicas</div>
              <div></div>
              <div>Album</div>
              <div>Duração</div>
            </div>

            {data?.tracks.data.map((track, key) => {
              return <TrackItem data={track} index={key} key={key} />;
            })}
          </div>
        </div>
      )}
    </Container>
  );
};
