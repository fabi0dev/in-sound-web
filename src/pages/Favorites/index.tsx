import { Button, Container, TrackItem } from "@/components";
import { FC } from "react";
import { FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "@/store/reducers/player";
import { selectFavorites } from "@/store/reducers/favorites";

export const Favorites: FC = () => {
  const dispatch = useDispatch();
  const { tracks } = useSelector(selectFavorites);

  return (
    <Container className="text-slate-200">
      <div>
        <div className="mt-5">
          <Button
            onClick={() => dispatch(setPlaylist(tracks))}
            icon={<FaPlay />}
          >
            Ouvir todas
          </Button>
        </div>

        <div>
          <div className="grid grid-cols-4 border-b-[1px] mb-5 mt-10 p-3 text-[15px]">
            <div>Músicas</div>
            <div></div>
            <div>Duração</div>
          </div>

          {tracks?.map((track, key) => {
            return <TrackItem data={track} index={key} key={key} />;
          })}

          {tracks?.length == 0 && (
            <div className="text-center text-sm">Nenhuma favorita ainda.</div>
          )}
        </div>
      </div>
    </Container>
  );
};
