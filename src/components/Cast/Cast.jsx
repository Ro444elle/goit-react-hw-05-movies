import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieCast } from 'components/Api/Api';
import styles from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const castResponse = await getMovieCast(movieId);
        setCast(castResponse.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Go Back
      </button>
      <h3 className={styles.sectionTitle}>Cast</h3>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <div>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
