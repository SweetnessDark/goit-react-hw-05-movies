import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sass from './MovieList.module.scss';

const baseImg = 'https://image.tmdb.org/t/p/w500/';
const imgNotFound =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

const MovieList = ({ movies, location }) => {
  return (
    <div className="container">
      <ul className={sass.movieList}>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <li className={sass.movieItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                className={sass.posterMovie}
                src={poster_path ? baseImg.concat(poster_path) : imgNotFound}
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
