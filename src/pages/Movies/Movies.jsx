import MovieList from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovies } from 'services/apiMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    setIsLoading(true);

    getMovies(query)
      .then(setMovies)
      .catch(error => {
        toast.error(`Sorry something went wrong. ${error.message}`);
      })
      .finally(setIsLoading(false));
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
      {isLoading && <p>Loading...</p>}
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
