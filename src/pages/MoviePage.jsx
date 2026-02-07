import { Movie } from "../components/Movie/Movie.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MoviePage = () => {
  return (
    <>
      <Movie />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviePage;
