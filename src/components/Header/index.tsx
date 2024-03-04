import { FC } from "react";
import { Input } from "../";
import { IoMdSearch } from "react-icons/io";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full py-3 px-5 ">
      <div className="flex">
        <div className="w-1/3 flex items-center -ml-6 ">
          <IoMdSearch className="w-5 h-5 ml-3 absolute text-slate-600" />
          <div className="w-full">
            <Input
              placeholder="Buscar música"
              className="indent-6 bg-opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
