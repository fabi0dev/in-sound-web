import { Skeleton } from "@/components";
import { FC } from "react";

export const SkeletonAlbum: FC = () => {
  return (
    <>
      <div className="flex mt-7 ">
        <Skeleton className="w-60 h-60 rounded-md mr-5 bg-slate-700" />

        <div className="mt-5">
          <Skeleton className="text-3xl font-bold  w-48 h-6 bg-slate-700" />

          <div className="flex items-center">
            <Skeleton className="text-xs flex items-center mt-4">
              <Skeleton className="w-6 h-6 rounded-full bg-cover mr-2 bg-slate-700" />
            </Skeleton>
            <Skeleton className="mt-2 w-28 h-3 bg-slate-700" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Skeleton className="mt-2 w-28 h-10 bg-slate-700" />
      </div>

      <div className="mt-5"></div>

      <div className="mt-20 ">
        <Skeleton className="mt-2 w-[90%] h-7 bg-slate-700 mb-3" />
        <Skeleton className="mt-2 w-[90%] h-7 bg-slate-700 mb-3" />
        <Skeleton className="mt-2 w-[90%] h-7 bg-slate-700 mb-3" />
        <Skeleton className="mt-2 w-[90%] h-7 bg-slate-700 mb-3" />
      </div>
    </>
  );
};
