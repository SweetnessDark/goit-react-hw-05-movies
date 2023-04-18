import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import MovieCard from './../../components/MovieCard/MovieCard';
import { getMoviesDetails } from './../../services/apiMovies';
import sass from './MoviesDetails.module.scss';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');

  useEffect(() => {
    setIsLoading(true);
    getMoviesDetails(movieId)
      .then(response => {
        setMoviesDetails(response);
      })
      .catch(error => {
        console.log('error :>> ', error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  if (!moviesDetails) {
    return null;
  }

  return (
    <>
      <Link className={sass.goBack} to={backLinkLocationRef.current}>
        Go Back
      </Link>

      {isLoading && <p>Loading...</p>}

      {moviesDetails && <MovieCard movie={moviesDetails} />}

      <div className={sass.linkInfo}>
        <Link className={sass.linkItemInfo} to={'cast'}>
          Cast
        </Link>
        <Link className={sass.linkItemInfo} to={'review'}>
          Review
        </Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
