import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/Api/Api';
import styles from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const reviewsResponse = await getMovieReviews(movieId);
        setReviews(reviewsResponse.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles['reviews-container']}>
      <h2 className={styles['reviews-title']}>Reviews</h2>
      <ul className={styles['review - list']}>
        {reviews.map(review => (
          <li key={review.id} className={styles['review-item']}>
            <p className={styles['review-author']}>{review.author}</p>
            <p className={styles['review-content']}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
