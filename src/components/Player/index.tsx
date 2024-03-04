import { FC } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { Slider } from "../Slider";

export const Player: FC = () => {
  return (
    <div className="flex fixed h-20 w-full bg-slate-900 border-t border-slate-800 bottom-0 text-slate-500 justify-center">
      <div className="grid grid-cols-4 items-center w-[90%] justify-between">
        <div className="mr-7">
          <div className="text-slate-200">Nome da Música</div>
          <div>Nome do Artista</div>
        </div>
        <div className="justify-center items-center text-slate-200 ">
          <div className="flex justify-center items-center  mb-3">
            <IoPlaySkipBack className="w-6 h-6" />
            <FaPlayCircle className="w-9 h-9 mx-3 text-cyan-300" />
            <IoPlaySkipForward className="w-6 h-6" />
          </div>
          <div className="flex w-full bg-blue-300 mb-3">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};
