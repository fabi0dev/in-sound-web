import { FC, useEffect, useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import {
  IoPlaySkipBack,
  IoVolumeHigh,
  IoVolumeLowSharp,
  IoVolumeMedium,
  IoVolumeOff,
} from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  nextTrack,
  prevTrack,
  selectorPlayer,
  setPaused,
  setVolume,
} from "@/store/reducers/player";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { Popover } from "..";
import { PopoverContent, PopoverTrigger } from "../Popover";
import { Slider } from "../Slider";
import { GiFire } from "react-icons/gi";

export const Player: FC = () => {
  const dispatch = useDispatch();
  const {
    current: { title, preview, album, artist },
    paused,
    volume,
    currentTime,
  } = useSelector(selectorPlayer);

  const audio = useRef(new Audio());
  const player = audio.current;

  const playPause = () => {
    if (!paused) {
      dispatch(setPaused(true));
    } else {
      dispatch(setPaused(false));
    }
  };

  const playerEvents = () => {
    player.onended = () => {
      dispatch(nextTrack());
    };
  };

  useEffect(() => {
    player.src = preview;
    player.play();
    playerEvents();

    return () => {
      player.src = "";
    };
  }, [title, preview, player]);

  useEffect(() => {
    player.volume = volume;
  }, [title, volume]);

  useEffect(() => {
    player.currentTime = currentTime;
  }, [title, player]);

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
            <motion.button
              onClick={() => dispatch(prevTrack())}
              whileTap={{ scale: 1.1 }}
            >
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

            <motion.button
              onClick={() => dispatch(nextTrack())}
              whileTap={{ scale: 1.1 }}
            >
              <IoPlaySkipForward className="w-6 h-6" />
            </motion.button>
          </div>

          <ProgressBar player={player} />
        </div>

        <div className="flex justify-end">
          <div className="flex gap-4">
            <Popover>
              <PopoverContent>
                <Slider
                  defaultValue={[volume]}
                  max={1}
                  step={0.05}
                  onValueChange={(val) => dispatch(setVolume(val[0]))}
                />
              </PopoverContent>
              <PopoverTrigger>
                {volume == 0 && (
                  <IoVolumeOff className="w-7 h-7 text-slate-400" />
                )}

                {volume > 0 && volume <= 0.3 && (
                  <IoVolumeLowSharp className="w-7 h-7 text-slate-400" />
                )}

                {volume > 0.3 && volume <= 0.7 && (
                  <IoVolumeMedium className="w-7 h-7 text-slate-400" />
                )}

                {volume > 0.7 && (
                  <IoVolumeHigh className="w-7 h-7 text-slate-400" />
                )}
              </PopoverTrigger>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <GiFire className="w-6 h-6 text-emerald-700 hover:text-emerald-500" />
              </PopoverTrigger>
              <PopoverContent>
                Desenvolvido por{" "}
                <a
                  href="https://fabioalves.site/"
                  target="_blank"
                  className="text-emerald-500 underline"
                >
                  Fábio Alves
                </a>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};
