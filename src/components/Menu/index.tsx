import { FC, ReactNode } from "react";
import { CgHome } from "react-icons/cg";
import { IoAlbumsOutline } from "react-icons/io5";

interface TitleDividerProps {
  children: string;
}

type ItemMenuProps = {
  descr: string;
  icon: ReactNode;
  current?: boolean;
};

export const Menu: FC = ({}) => {
  const TitleDivider: FC<TitleDividerProps> = ({ children }) => {
    return (
      <div className="flex mb-6">
        <div className="uppercase text-slate-700 text-xs font-bold">
          {children}
        </div>
      </div>
    );
  };

  const ItemMenu: FC<ItemMenuProps> = ({ descr, icon, current = false }) => {
    return (
      <div className="flex mb-4">
        <div
          data-current={current}
          className="text-slate-400 text-sm font-semibold flex items-center data-[current=true]:text-cyan-500"
        >
          <div className="text-lg mr-4">{icon}</div>
          <div className="text-[15px]">{descr}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-64 h-lvh bg-slate-900 fixed left-0">
      <div className="w-11/12  mx-auto mt-4">
        <TitleDivider>Menu</TitleDivider>

        <ItemMenu descr="Explorar" current={true} icon={<CgHome />} />
        <ItemMenu descr="Albuns" icon={<IoAlbumsOutline />} />
      </div>
    </div>
  );
};
