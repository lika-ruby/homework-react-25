import { useEffect, useState } from "react";
import { Container } from "../Container/Container.jsx";
import { getTrendingMovies } from "../../fetches/gets/getTrendingMovies.jsx";
import { MovieItem } from "../MovieItem/MovieItem.jsx";
import { useLocation } from "react-router-dom"; // <-- додаємо
import { Sect, Title, List } from "./TrendingList.js";

export const TrendingList = () => {
  const [trendings, setTrendings] = useState([]);
  const location = useLocation(); // <-- отримуємо location

  useEffect(() => {
    const fetchTrendings = async () => {
      const data = await getTrendingMovies();
      setTrendings(data.results);
    };

    fetchTrendings();
  }, []);

  return (
    <Sect>
      <Container>
        <Title>Trending</Title>
        <List>
          {trendings.map((trending) => (
            <MovieItem
              key={trending.id}
              id={trending.id}
              img={trending.poster_path}
              name1={trending.title}
              name2={trending.name}
              linkState={{ from: location.pathname }} // <-- передаємо звідки прийшли
            />
          ))}
        </List>
      </Container>
    </Sect>
  );
};
