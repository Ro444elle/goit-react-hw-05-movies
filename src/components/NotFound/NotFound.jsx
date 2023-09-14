import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={styles.linkN}>
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
