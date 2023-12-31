import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'components/Api/Api';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log('MovieID:', movieId);
    async function fetchMovieData() {
      try {
        const detailsResponse = await getMovieDetails(movieId);
        setMovieDetails(detailsResponse);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchMovieData();
  }, [movieId]);

  return (
    <div className={styles.movieDetailsContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Go Back
      </button>
      <h2 className={styles.movieTitle}>{movieDetails.title}</h2>
      <p className={styles.movieOverview}>{movieDetails.overview}</p>
      <div className={styles.genres}>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => (
            <span key={genre.id} className={styles.genre}>
              {genre.name}
            </span>
          ))}
      </div>
      <div className={styles.navigationLinks}>
        <Link to={`/movies/${movieId}/cast`} className={styles.linkC}>
          View Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} className={styles.linkR}>
          View Reviews
        </Link>
      </div>
    </div>
  );
}
