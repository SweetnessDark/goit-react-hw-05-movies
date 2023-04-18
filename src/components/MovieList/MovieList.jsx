import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sass from './MovieList.module.scss';

const MovieList = ({ movies, location }) => {
  const baseImg = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className="container">
      <ul className={sass.movieList}>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <li className={sass.movieItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                className={sass.posterMovie}
                src={baseImg.concat(poster_path)}
                alt=""
              />
              <p className={sass.titleMovie}>{title ?? original_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
  location: PropTypes.object,
};

export default MovieList;
