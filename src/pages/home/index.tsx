import { Container } from "@components";
import { ContentAlbums } from "./ContentAlbums";
import { useCallback, useEffect } from "react";
import { deezer } from "@/services/DeezerAPI";
import { useDispatch } from "react-redux";
import { clear, setData } from "@/store/reducers/editorialChart";
import { ContentTracks } from "./ContentTracks";
import { ContentPlaylists } from "./ContentPlaylists";
import { ContentArtists } from "./ContentArtists";
import "./style.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const getChartHome = useCallback(async () => {
    dispatch(clear());
    const response = await deezer.getEditorialChart();
    dispatch(setData(response));
  }, [dispatch]);

  useEffect(() => {
    getChartHome();
  }, [getChartHome]);
  return (
    <Container>
      <ContentAlbums />
      <ContentArtists />

      <ContentTracks />
      <ContentPlaylists />
    </Container>
  );
};
