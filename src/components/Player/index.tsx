import { FC, useEffect, useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectorplayer, setPaused } from "@/store/reducers/player";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";

export const Player: FC = () => {
  const dispatch = useDispatch();
  const { title, preview, album, artist, paused, volume, currentTime } =
    useSelector(selectorplayer);
  const audio = useRef(new Audio());
  const player = audio.current;

  const playPause = () => {
    if (!paused) {
      dispatch(setPaused(true));
    } else {
      dispatch(setPaused(false));
    }
  };

  useEffect(() => {
    player.src = preview;
    player.volume = volume;
    player.play();

    return () => {
      player.src = "";
    };
  }, [title, preview, player, volume]);

  useEffect(() => {
    player.currentTime = currentTime;
  }, [player]);

  useEffect(() => {
    if (paused) {
      player.pause();
    } else {
      player.play();
    }
  }, [player, paused]);

  return (
    <div className="flex fixed h-24 w-full bg-slate-900 border-t border-slate-800 bottom-0 text-slate-500 justify-center">
      <div className="grid grid-cols-3 items-center w-[90%] justify-between">
        <div className="mr-7 ">
          {album && (
            <div className="flex items-center">
              <div
                style={{ backgroundImage: `url(${album.cover_medium})` }}
                className="w-10 h-10 bg-slate-800 mr-3 rounded-sm bg-cover"
              ></div>
              <div>
                <div className="text-slate-200">{title}</div>
                <div>{artist.name}</div>
              </div>
            </div>
          )}
        </div>
        <div className="justify-center items-center text-slate-200  ">
          <div className="flex justify-center items-center  mb-2">
            <motion.button whileTap={{ scale: 1.1 }}>
              <IoPlaySkipBack className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 1.1 }}
              onClick={() => playPause()}
            >
              {paused && (
                <FaPlayCircle className="w-10 h-10 mx-4 text-cyan-300" />
              )}
              {!paused && (
                <FaPauseCircle className="w-10 h-10 mx-4 text-cyan-300" />
              )}
            </motion.button>

            <motion.button whileTap={{ scale: 1.1 }}>
              <IoPlaySkipForward className="w-6 h-6" />
            </motion.button>
          </div>

          <ProgressBar player={player} />
        </div>
      </div>
    </div>
  );
};
