import { cn } from "@/lib/utils";
import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn("min-h-lvh", className)}>{children}</div>;
};
