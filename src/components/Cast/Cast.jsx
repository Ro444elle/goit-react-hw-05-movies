import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/Api/Api';
import styles from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

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
    <div className={styles['cast-container']}>
      <h2 className={styles['cast-title']}>Cast</h2>
      <ul className={styles['cast-list']}>
        {cast.map(actor => (
          <li key={actor.id} className={styles['cast-item']}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
