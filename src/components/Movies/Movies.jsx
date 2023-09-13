import React, { useState } from 'react';
import { searchMovies } from 'components/Api/Api';

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

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
      {/* {error && <p>Error:{error.message}</p>} */}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
