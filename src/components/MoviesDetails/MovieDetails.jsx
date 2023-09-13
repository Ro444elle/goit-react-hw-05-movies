import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
} from 'components/Api/Api';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log('MovieID:', movieId);
    async function fetchMovieData() {
      try {
        const detailsResponse = await getMovieDetails(movieId);
        setMovieDetails(detailsResponse);
        const castResponse = await getMovieCast(movieId);
        setCast(castResponse.cast);
        const reviewsResponse = await getMovieReviews(movieId);
        setReviews(reviewsResponse.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);

        console.error('Error status:', error.response?.status);
        console.error('Error message:', error.message);
      }
    }
    fetchMovieData();
  }, [movieId]);

  return (
    <div className={styles.movieDetailsContainer}>
      <h2 className={styles.movieTitle}>{movieDetails.title}</h2>
      <p className={styles.movieOverview}>{movieDetails.overview}</p>

      <h3 className={styles.sectionTitle}>Cast</h3>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            {actor.name}
          </li>
        ))}
      </ul>

      <h3 className={styles.sectionTitle}>Reviews</h3>
      <ul className={styles.reviewList}>
        {reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
