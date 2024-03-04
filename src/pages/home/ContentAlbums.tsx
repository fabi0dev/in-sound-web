import { selectorEditorialChart } from "@/store/reducers/editorialChart";
import { FC } from "react";
import { useSelector } from "react-redux";
import { ItemPicture, TitleDivider } from "@/components";

export const ContentAlbums: FC = () => {
  const {
    albums: { data },
  } = useSelector(selectorEditorialChart);

  return (
    <div>
      <TitleDivider
        title="Albuns Populares"
        href={`AllAlbum`}
        className={"mt-5"}
      />
      <div className="flex gap-5 justify-start overflow-x-hidden">
        {data?.map((data, key) => {
          if (key <= 5) {
            return <ItemPicture href={`ViewAlbum?id=${data.id}`} data={data} />;
          }
        })}
      </div>
    </div>
  );
};
