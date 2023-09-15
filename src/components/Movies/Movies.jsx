import React, { useState } from 'react';
import { searchMovies } from 'components/Api/Api';
import styles from './Movies.module.css';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  // const [error, setError] = null;

  const handleSearch = async () => {
    try {
      const response = await searchMovies(searchKeyword);
      setMovies(response.results);
      // setError(null);
    } catch (error) {
      console.error('Error fetching movies search:', error);
      // setError(error);
    }
  };

  const handleEnterKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles['movie-container']}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Search for movies..."
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
        onKeyDown={handleEnterKeyPress}
      />

      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
      {/* {error && <p>Error:{error.message}</p>} */}
      {/* <Link to="/">
        <button className={styles.backButton}>Back to Home</button>
      </Link> */}
      <ul className={styles['movie-list']}>
        {movies.map(movie => (
          <li key={movie.id} className={styles['movie-item']}>
            <Link to={`/movies/${movie.id}`}>
              <p className={styles['movie-title']}>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                className={styles['movie-poster']}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
