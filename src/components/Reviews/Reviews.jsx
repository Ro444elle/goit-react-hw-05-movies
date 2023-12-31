import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieReviews } from 'components/Api/Api';
import styles from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

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
    <div className={styles.reviewsContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Go Back
      </button>
      <h3 className={styles.sectionTitle}>Reviews</h3>
      <ul className={styles.reviewList}>
        {reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <p className={styles.reviewAuthor}>{review.author}</p>
            <p className={styles.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
