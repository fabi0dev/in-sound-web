import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleDividerProps {
  children: string;
  className?: string;
}

export const TitleMin: FC<TitleDividerProps> = ({ children, className }) => {
  return <div className={cn("text-xl mb-5", className)}>{children}</div>;
};
