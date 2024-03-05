import {
  Container,
  Input,
  ItemPictureArtist,
  Tabs,
  TrackItem,
} from "@/components";
import { FC, useEffect, useState } from "react";
import { ContentGenres } from "./ContentGenres";
import { IoMdSearch } from "react-icons/io";
import { deezer } from "@/services/DeezerAPI";
import { useSearchParams } from "react-router-dom";
import { TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { ItemPicturePlaylist } from "@/components/ItemPicturePlaylist";

interface ITrack {
  id: number;
  preview: string;
  title: string;
  title_short: string;
  duration: number;
  artist: IArtist;
  album: {
    id: number;
    title: string;
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
  };
}

interface IArtist {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  tracklist: string;
}

interface IPlaylist {
  id: number;
  title: string;
  link: string;
  nb_tracks: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  tracklist: string;
}

export const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [textSearch, setTextSearch] = useState(q || "");
  const [dataTracks, setDataTracks] = useState<ITrack[]>([]);
  const [dataPlaylist, setDataPlaylist] = useState<IPlaylist[]>([]);
  const [dataArtist, setDataArtist] = useState<IArtist[]>([]);

  const search = async () => {
    const response = await deezer.search(q);
    setDataTracks(response.data);
  };

  const getPlaylist = async () => {
    const response = await deezer.searchPlaylist(q);
    setDataPlaylist(response.data);
  };

  const getArtist = async () => {
    const response = await deezer.searchArtist(q);
    setDataArtist(response.data);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      if (textSearch != "") {
        window.location.href = `#search?q=${textSearch}`;
      }
    }, 500);
    return () => {
      clearTimeout(time);
    };
  }, [textSearch]);

  useEffect(() => {
    if (q != null) {
      search();
      getArtist();
      getPlaylist();
    }
  }, [q]);

  const ContentArtist = ({ limit = 6, title = "Artistas" }) => {
    return (
      <div>
        {dataArtist.length > 0 && (
          <div className="text-xl font-bold text-slate-200 my-9 ">{title}</div>
        )}
        <div className="flex flex-wrap gap-5">
          {dataArtist.map((artist, index) => {
            if (index < limit) {
              return <ItemPictureArtist data={artist} index={index} />;
            }
          })}
        </div>
      </div>
    );
  };

  const ContentPlaylists = ({ limit = 6, title = "Playlists" }) => {
    return (
      <div>
        {dataPlaylist.length > 0 && (
          <div className="text-xl font-bold text-slate-200 my-9 ">{title}</div>
        )}
        <div className="flex flex-wrap gap-5">
          {dataPlaylist.map((playlist, index) => {
            if (index < limit) {
              return (
                <ItemPicturePlaylist
                  data={playlist}
                  index={index}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
    );
  };

  const ContentTracks = ({ limit = 6, title = "Músicas" }) => {
    return (
      <div>
        <div className="text-xl font-bold text-slate-200 my-9 ">{title}</div>
        {dataTracks.map((track, index) => {
          if (index < limit) {
            return <TrackItem data={track} key={index} index={index} />;
          }
        })}
      </div>
    );
  };

  return (
    <Container title="buscar">
      <div className="flex w-full mb-10 px-5">
        <div className="w-1/3 flex items-center -ml-6 ">
          <IoMdSearch className="w-5 h-5 ml-3 absolute text-slate-500" />
          <div className="w-full">
            <Input
              placeholder="Música, artista, playlist"
              className="indent-6 bg-opacity-70"
              onChange={(e) => setTextSearch(e.target.value)}
              value={`${textSearch}`}
            />
          </div>
        </div>
      </div>

      {q != null && q != "" && (
        <Tabs defaultValue="fists">
          <TabsList>
            <TabsTrigger value="fists">Primeiros</TabsTrigger>
            <TabsTrigger value="artists">Artistas</TabsTrigger>
            <TabsTrigger value="tracks">Músicas</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
          </TabsList>

          <TabsContent value="fists">
            <div className="flex text-slate-200">
              {dataArtist && dataArtist.length > 0 && (
                <div>
                  <div className="text-2xl mb-2">Resultado principal</div>
                  <div className="w-72 h-72 p-5  bg-slate-900 flex flex-wrap items-center rounded-lg">
                    <a href={`#ViewArtist?id=${dataArtist[0].id}`}>
                      <div
                        className="w-32 h-32 bg-center bg-cover rounded-lg"
                        style={{
                          backgroundImage: `url(${dataArtist[0].picture_medium})`,
                        }}
                      ></div>

                      <div className="w-full text-3xl">
                        {dataArtist[0].name}
                      </div>
                      <div className="w-full text-lg text-slate-400">
                        Artista
                      </div>
                    </a>
                  </div>
                </div>
              )}

              <div>
                <div className="text-2xl ml-5 mb-2">Músicas</div>
                <div className="ml-5 gap-2 flex flex-wrap items-center h-60 ">
                  {dataTracks.map((track, index) => {
                    if (index < 4) {
                      return (
                        <div className="w-full">
                          <TrackItem
                            basic={true}
                            data={track}
                            key={index}
                            index={null}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            <ContentArtist />
            <ContentPlaylists />
          </TabsContent>

          <TabsContent value="artists">
            <ContentArtist limit={50} title={""} />
          </TabsContent>

          <TabsContent value="tracks">
            <div className="grid grid-cols-4 border-b-[1px] mb-5 mt-10 p-3 text-[15px] text-slate-100">
              <div>Músicas</div>
              <div></div>
              <div>Album</div>
              <div>Duração</div>
            </div>
            <ContentTracks limit={50} title={""} />
          </TabsContent>

          <TabsContent value="playlists">
            <ContentPlaylists limit={50} title={""} />
          </TabsContent>
        </Tabs>
      )}

      <ContentGenres />
    </Container>
  );
};
