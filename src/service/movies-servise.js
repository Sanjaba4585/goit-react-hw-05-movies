import axios from 'axios';

// const API_KEY = '4744525d1800c89cfdfbbbd549aa8ef3';
const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU',
  },
};
export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

export const getMoviesByQuery = async filmName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${filmName}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?language=en-US`,
    options
  );

  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?language=en-US`,
    options
  );

  return response.data;
};
