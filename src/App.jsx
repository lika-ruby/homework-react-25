import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout.jsx";
import { Cast } from "./components/Cast/Cast.jsx";
import { Reviews } from "./components/Reviews/Reviews.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
const MoviePage = lazy(() => import("./pages/MoviePage.jsx"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />

            <Route path="movies/:id" element={<MoviePage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
