import axios from "axios";

export const getMoviesByFilter = async (query, page = 1) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIxYjg4MWQwMjZmYWE0ODJmYzRhZTJkMmMyZDMyNiIsIm5iZiI6MTc2OTA3OTMyOC4wNSwic3ViIjoiNjk3MjAyMjBiNzk0ZWZiOThkZWJhYjcyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.q_BBduZD5lyPHvTlmyyui30eBvhqMhbzHnDWcvvibOg",
      },
    }
  );

  return response.data;
};
