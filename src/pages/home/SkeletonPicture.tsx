import { SkeletonItemPicture } from "@/components/ItemPicture/SkeletonItemPicture";
import { FC } from "react";

export const SkeletonPicture: FC = () => {
  return (
    <div>
      <SkeletonItemPicture />
      <SkeletonItemPicture />
      <SkeletonItemPicture />
      <SkeletonItemPicture />
      <SkeletonItemPicture />
    </div>
  );
};
