import { Container } from "../Container/Container.jsx";
import { useState, useEffect } from "react";
import { getMoviesByFilter } from "../../fetches/gets/getMoviesByFilter.jsx";
import { MovieItem } from "../MovieItem/MovieItem.jsx";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  SearchWrap,
  SearchTitle,
  SearchForm,
  SearchListS,
} from "./SearchList.js";

export const SearchList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";
  const [inputValue, setInputValue] = useState(queryParam);

  useEffect(() => {
    if (!queryParam) return;

    const fetchMovies = async () => {
      const data = await getMoviesByFilter(queryParam);
      setMovies(data.results);
    };

    fetchMovies();
  }, [queryParam]);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const data = await getMoviesByFilter(trimmed);
    setMovies(data.results);
    setSearchParams({ query: trimmed });
  };

  return (
    <SearchWrap>
      <Container>
        <SearchTitle>Search Movies</SearchTitle>
        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Movie name"
          />
          <button type="submit">Search</button>
        </SearchForm>
        <SearchListS>
          {movies.map((mov) => (
            <MovieItem
              key={mov.id}
              id={mov.id}
              img={mov.poster_path}
              name1={mov.title}
              name2={mov.name}
              linkState={{ from: location }}
            />
          ))}
        </SearchListS>
      </Container>
    </SearchWrap>
  );
};
