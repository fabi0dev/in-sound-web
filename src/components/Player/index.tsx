import { FC } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";

export const Player: FC = () => {
  return (
    <div className="flex fixed h-20 w-full bg-slate-900 border-t border-slate-800 bottom-0 text-slate-500 justify-center">
      <div className="flex items-center w-[90%]">
        <div className="mr-7">
          <div className="text-slate-200">Nome da Música</div>
          <div>Nome do Artista</div>
        </div>
        <div className="flex w-36 justify-between items-center text-slate-200">
          <IoPlaySkipBack className="w-7 h-7" />
          <FaPlayCircle className="w-10 h-10" />
          <IoPlaySkipForward className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};
