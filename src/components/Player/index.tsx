import { FC } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { Slider } from "../Slider";

export const Player: FC = () => {
  return (
    <div className="flex fixed h-24 w-full bg-slate-900 border-t border-slate-800 bottom-0 text-slate-500 justify-center">
      <div className="grid grid-cols-3 items-center w-[90%] justify-between">
        <div className="mr-7 flex items-center">
          <div className="w-10 h-10 bg-slate-800 mr-3 rounded-sm"></div>
          <div>
            <div className="text-slate-200">Nome da Música</div>
            <div>Nome do Artista</div>
          </div>
        </div>
        <div className="justify-center items-center text-slate-200  ">
          <div className="flex justify-center items-center  mb-2">
            <IoPlaySkipBack className="w-6 h-6" />
            <FaPlayCircle className="w-10 h-10 mx-4 text-cyan-300" />
            <IoPlaySkipForward className="w-6 h-6" />
          </div>
          <div className="flex w-full mb-3 text-sm">
            <span>0:00</span>
            <Slider className="mx-2" />
            <span>0:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};
