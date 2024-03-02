import { Container, Header, Menu, Player } from "@components";
import { ContentAlbums } from "./ContentAlbums";
import { useCallback, useEffect } from "react";
import { deezer } from "@/services/DeezerAPI";
import { useDispatch } from "react-redux";
import { setData } from "@/store/reducers/editorialChart";
import { ContentTracks } from "./ContentTracks";
import { ContentPlaylists } from "./ContentPlaylists";
import { ContentArtists } from "./ContentArtists";

export const Home = () => {
  const dispatch = useDispatch();
  const getChartHome = useCallback(async () => {
    const response = await deezer.getEditorialChart();
    dispatch(setData(response));
  }, [dispatch]);

  useEffect(() => {
    getChartHome();
  }, [getChartHome]);
  return (
    <Container>
      <div>
        <Menu />

        <div className="w-auto ml-80 pb-24">
          <div className="w-[95%] mx-auto">
            <Header />

            <div className="gap-x-6">
              <ContentAlbums />
              <ContentArtists />

              <ContentTracks />
              <ContentPlaylists />
            </div>
          </div>
        </div>

        <Player />
      </div>
    </Container>
  );
};
