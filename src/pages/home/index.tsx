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
import axios from "axios";

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

  const test = async () => {
    const api = axios.create({
      baseURL: "https://api.github.com/users/fabi0dev/",
    });

    const repos = await api.get("repos");
    console.log(repos);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <Container title="Home">
      <ContentAlbums />
      <ContentArtists />

      <ContentTracks />
      <ContentPlaylists />
    </Container>
  );
};
