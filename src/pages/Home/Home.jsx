import { getTrendingMovies } from 'services/apiMovies';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => {
        console.log('error :>> ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {movies.length > 0 && (
        <div className="container">
          <h1>Trending Today</h1>
          <MovieList movies={movies} location={location} />
        </div>
      )}
    </>
  );
};

export default Home;
