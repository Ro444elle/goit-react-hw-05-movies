import axios from 'axios';

const API_KEY = 'b2e5d6ef71f6d003ae07c83bfe03fa15';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async keyword => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query: keyword,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await api.get(`/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await api.get(`/movies/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await api.get(`/movies/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie cast', error);
    throw error;
  }
};
