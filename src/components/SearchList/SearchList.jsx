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
  const query = searchParams.get("query") || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const data = await getMoviesByFilter(query);
    setMovies(data.results);

    setSearchParams({ query });
  };

  const handleChange = (e) => setSearchParams({ query: e.target.value });
  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const data = await getMoviesByFilter(query);
      setMovies(data.results);
    };

    fetchMovies();
  }, [query]);

  return (
    <SearchWrap>
      <Container>
        <SearchTitle>Search Movies</SearchTitle>
        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
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
