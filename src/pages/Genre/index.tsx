import { Container, Skeleton } from "@components";
import { useCallback, useEffect, useState } from "react";
import { deezer } from "@/services/DeezerAPI";
import { useDispatch } from "react-redux";
import { clear, setData } from "@/store/reducers/editorialChart";
import "../home/style.scss";
import { ContentAlbums } from "../home/ContentAlbums";
import { ContentArtists } from "../home/ContentArtists";
import { ContentTracks } from "../home/ContentTracks";
import { ContentPlaylists } from "../home/ContentPlaylists";
import { useSearchParams } from "react-router-dom";

interface Genre {
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
}

export const Genre = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [info, setInfo] = useState<Genre>();

  const getChart = useCallback(async () => {
    dispatch(clear());
    const [genreInfo, genreData] = await Promise.all([
      deezer.getGenre(searchParams.get("id")),
      deezer.getEditorialChart(searchParams.get("id")),
    ]);
    setInfo(genreInfo);
    dispatch(setData(genreData));
  }, [dispatch, searchParams]);

  useEffect(() => {
    getChart();
  }, [getChart]);
  return (
    <Container>
      {info && (
        <div className="flex mt-5">
          <div
            style={{ backgroundImage: `url(${info?.picture_medium})` }}
            className="w-16 h-12 rounded-md mr-3 bg-cover"
          ></div>
          <div className="text-slate-300 font-bold text-3xl">{info?.name}</div>
        </div>
      )}

      {!info && (
        <Skeleton className="flex mt-5">
          <Skeleton className="w-16 h-12 rounded-md mr-3 bg-slate-700"></Skeleton>
          <Skeleton className="bg-slate-700 w-64 h-6"></Skeleton>
        </Skeleton>
      )}
      <ContentAlbums />
      <ContentArtists />

      <ContentTracks />
      <ContentPlaylists />
    </Container>
  );
};
