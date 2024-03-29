import { cn } from "@/lib/utils";
import { FC, useEffect } from "react";
import { Menu } from "..";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  title,
}) => {
  useEffect(() => {
    document.title = `InSound Web ${title ? ` - ${title}` : ``}`;
  }, [title]);

  return (
    <div className={cn("min-h-lvh", className)}>
      <Menu />

      <div className="w-auto ml-80 pb-32">
        <div className="w-[95%] mx-auto">
          <div>{children}</div>
        </div>
      </div>

      <div
        className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#74c26a] to-[#20acd6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};
