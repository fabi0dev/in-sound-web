import { TitleDivider } from "@/components";
import { deezer } from "@/services/DeezerAPI";
import { FC, useEffect, useState } from "react";

export const ContentGenres: FC = () => {
  const [genres, setGenres] = useState([]);

  const getData = async () => {
    const response = await deezer.getGenre();
    setGenres(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TitleDivider title="Todos os gostos musicais" />

      <div className="flex flex-wrap gap-5 justify-start">
        {genres.map(({ id, name, picture_medium }, index) => {
          return (
            <a
              key={index}
              href={`#Genre?id=${id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="bg bg-slate-900 hover:bg-slate-800 rounded-md p-4 "
            >
              <div className="content-hover-options text-slate-200 ">
                <div
                  style={{
                    backgroundImage: `url('${picture_medium}')`,
                  }}
                  className={`h-36 w-48 bg-cover bg-center rounded-2xl`}
                ></div>

                <div>
                  <div className="w-48 mt-4 text-[15px] font-semibold truncate">
                    {name}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
