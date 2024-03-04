import { FC, ReactNode } from "react";
import { CgHome } from "react-icons/cg";
import { IoAlbumsOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";

interface TitleDividerProps {
  children: string;
}

type ItemMenuProps = {
  descr: string;
  icon: ReactNode;
  current?: boolean;
  href?: string;
};

export const Menu: FC = () => {
  const TitleDivider: FC<TitleDividerProps> = ({ children }) => {
    return (
      <div className="flex my-10">
        <div className="uppercase text-slate-600 text-xs font-bold">
          {children}
        </div>
      </div>
    );
  };

  const ItemMenu: FC<ItemMenuProps> = ({
    descr,
    icon,
    href,
    current = false,
  }) => {
    return (
      <a
        href={href}
        className="flex my-5 text-slate-300 hover:text-slate-200 cursor-pointer"
      >
        <div
          data-current={current}
          className=" text-sm font-semibold flex items-center data-[current=true]:text-cyan-500"
        >
          <div className="text-lg mr-4">{icon}</div>
          <div className="text-[16px]">{descr}</div>
        </div>
      </a>
    );
  };

  return (
    <div className="w-80 h-lvh  fixed left-0 ">
      <div className="w-10/12  mx-auto mt-7">
        <div className="flex items-center text-2xl">
          <RiNeteaseCloudMusicLine className="mr-2 text-cyan-500" />
          <span className="text-cyan-100">In</span>Sound
        </div>
        <TitleDivider>Menu</TitleDivider>

        <ItemMenu href="/" descr="Explorar" current={true} icon={<CgHome />} />
        <ItemMenu descr="Albuns" icon={<IoAlbumsOutline />} />
        <ItemMenu descr="Favoritos" icon={<FaRegStar />} />

        <TitleDivider>Biblioteca</TitleDivider>

        <ItemMenu descr="Minha Playlist" icon={<BiSolidPlaylist />} />
        <ItemMenu descr="Favoritas" icon={<IoStar />} />
      </div>
    </div>
  );
};
