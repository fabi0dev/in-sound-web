import { Container, Header, Menu } from "@components";
import { ContentAlbums } from "./ContentAlbums";

export const Home = () => {
  return (
    <Container>
      <div>
        <Menu />

        <div className="flex w-auto ml-64 ">
          <Header />

          <ContentAlbums data={[]} />
        </div>
      </div>
    </Container>
  );
};
