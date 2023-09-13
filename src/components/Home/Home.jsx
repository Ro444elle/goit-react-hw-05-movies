import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'components/Api/Api';
import styles from './Home.module.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles['home-container']}>
      <h2 className={styles['trending-title']}>Trending Movies</h2>
      <ul className={styles['movie-list']}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={styles['movie-item']}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                className={styles['movie-poster']}
              />
              <p className={styles['movie-title']}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
