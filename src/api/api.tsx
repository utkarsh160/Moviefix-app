import axios from 'axios';
import { API_KEY, MOVIEDB_BASE_URL } from '../utils/constants';

// Function to fetch a list of movies
export const fetchMovies = async (year: number, genres: number[] = []) => {
  try {
    const response = await axios.get(`${MOVIEDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        sort_by: 'popularity.desc',
        primary_release_year: year,
        vote_count_gte: 100,
        with_genres: genres.join(','), 
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

// Function to fetch a list of movie genres
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${MOVIEDB_BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch genres');
  }
};

// Function to fetch movie details by movie ID
export const fetchMovieDetails = async (movieId : number) => {
    try {
      const response = await axios.get(`${MOVIEDB_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movie details');
    }
  };

  
// Function to fetch movie credits by movie ID
export const fetchMovieCredits = async (movieId : number) => {
    try {
      const response = await axios.get(`${MOVIEDB_BASE_URL}/movie/${movieId}/credits`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movie credits');
    }
  };


// Function to search for movies based on a query and optional genre filter
export const searchMovies = async (query:string, genres: number[] = []) => {
  const genreParam = genres.length > 0 ? `&with_genres=${genres.join(',')}` : '';

  try {
    const response = await axios.get(`${MOVIEDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}${genreParam}`);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error searching movies:');
  }
};
