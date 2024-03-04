import { SkeletonItemPicture } from "@/components/ItemPicture/SkeletonItemPicture";
import { FC } from "react";

export const SkeletonPicture: FC = () => {
  return (
    <div className="flex gap-5">
      <SkeletonItemPicture />
      <SkeletonItemPicture />
      <SkeletonItemPicture />
      <SkeletonItemPicture />
      <SkeletonItemPicture />
    </div>
  );
};
