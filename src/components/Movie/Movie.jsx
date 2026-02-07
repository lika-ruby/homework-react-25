import { useLocation } from "react-router-dom";
import { Container } from "../Container/Container.jsx";
import { getMovieById } from "../../fetches/gets/getMovieById.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MovieWrap,
  BackLink,
  MovieInfo,
  Poster,
  Info,
  Title,
  Text,
  Subtitle,
  AddTitle,
  AddList,
  AddLink,
} from "./Movie.js";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = location.state?.from || "/";

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <MovieWrap>
      <Container>
        <BackLink to={backLink}>Go back</BackLink>

        <MovieInfo>
          <Poster
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title}
          />

          <Info>
            <Title>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Title>

            <Text>User Score: {Math.round(movie.vote_average * 10)}%</Text>

            <Subtitle>Overview</Subtitle>
            <Text>{movie.overview}</Text>

            <Subtitle>Genres</Subtitle>
            <Text>{movie.genres.map((g) => g.name).join(", ")}</Text>
          </Info>
        </MovieInfo>

        <AddTitle>Additional information</AddTitle>
        <AddList>
          <li>
            <AddLink to="cast">Cast</AddLink>
          </li>
          <li>
            <AddLink to="reviews">Reviews</AddLink>
          </li>
        </AddList>
      </Container>
    </MovieWrap>
  );
};
