import PropTypes from 'prop-types';
import sass from './MovieCard.module.scss';

const imgNotFound =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({ movie }) => {
  const { poster_path, title, genres, overview, release_date, vote_average } =
    movie;
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(genre => genre.name).join(', ');

  return (
    <div className={sass.container}>
      <img
        src={poster_path ? imgBaseUrl.concat(poster_path) : imgNotFound}
        alt={title}
        width="350"
      />
      <div className={sass.wrapper}>
        <h2 className={sass.nameMovie}>
          {title} <span>({releaseDate})</span>
        </h2>
        <p className={sass.infoMovie}>
          User score: <span>{voteScore}</span>
        </p>
        <p className={sass.infoMovie}>
          Overview: <span>{overview}</span>
        </p>
        <p className={sass.infoMovie}>
          Genres: <span>{genresList}</span>
        </p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard;
