import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleDividerProps {
  title: string;
  href: string;
  className?: string;
}

export const TitleDivider: FC<TitleDividerProps> = ({
  title,
  href,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between text-2xl font-bold text-slate-300 mb-7 mt-24",
        className
      )}
    >
      {title}
      {href && (
        <a href={`#${href}`} className="text-[15px] font-semibold">
          Ver todos
        </a>
      )}
    </div>
  );
};
