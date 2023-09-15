import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import 'normalize.css';
import styles from './App.module.css';

const Home = lazy(() => import('./Home/Home'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MoviesDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const location = useLocation();

  const isNotFound = location.pathname === '/not-found';

  return (
    <div>
      {!isNotFound && (
        <nav>
          <ul className={styles.linkList}>
            <li>
              <Link to="/" className={styles.linkH}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className={styles.linkM}>
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} /> {/* Default Route */}
        </Routes>
      </Suspense>
    </div>
  );
};
