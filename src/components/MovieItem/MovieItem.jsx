import { Link } from "react-router-dom";
import { Item, Img, Down, Name } from "./MovieItem";

export const MovieItem = ({ id, img, name1, name2, linkState }) => {
  return (
    <Link to={`/movies/${id}`} state={linkState}>
      {" "}
      {/* <-- передаємо state */}
      <Item key={id}>
        <Img
          src={`https://image.tmdb.org/t/p/w1280${img}`}
          alt={name1 || name2}
        />
        <Down>
          <Name>
            {name1} {name2}
          </Name>
        </Down>
      </Item>
    </Link>
  );
};
