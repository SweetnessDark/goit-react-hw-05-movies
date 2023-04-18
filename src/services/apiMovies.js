import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '334a07dbaaf512194560b403a0d27f31',
  language: 'en-US',
  include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?${searchParams}`);
  return data;
};

export const getMovies = async name => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${name}`
  );
  return data.results;
};

export const getMoviesDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?${searchParams}`);
  return data;
};

export const getCastMovie = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return data.cast;
};

export const getReviewsMovie = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return data.results;
};
