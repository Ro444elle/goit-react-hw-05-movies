const API_KEY = 'b2e5d6ef71f6d003ae07c83bfe03fa15';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async keyword => {
  try {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};
