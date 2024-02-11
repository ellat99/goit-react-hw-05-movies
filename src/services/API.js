import axios from 'axios;';
export const API_KEY = '2c377e0945bf380dcc38d60ea672457f';
///CERERE CATRE CELE MAI POPULARE FILME/////
//trimiteam o solicitare GET catre link pt a obt cele mai pop filme
export const fetchMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    {
      //este rpimis ca parte a cererii pt a returna rezultatele intr un array
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};
export const getMovieDetails = async id => {
  const movieById = await axios.get(
    'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};
export const getCast = async movieId => {
  const cast = await axios.get(
    'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1${id}',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};
export const getReviews = async movieId => {
  const reviews = await axios.get(
    'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1${movieId}',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};
export const searchMovies = async query => {
  const search = await axios.get(
    'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
    {
      params: {
        api_key: API_KEY,
        query: query,
      },
    }
  );

  return search.data.results;
};
