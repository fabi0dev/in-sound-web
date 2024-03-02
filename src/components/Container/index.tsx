import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="bg-slate-950 min-h-lvh">{children}</div>;
};
