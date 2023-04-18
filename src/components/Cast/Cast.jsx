import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/apiMovies';
import sass from './Cast.module.scss';

const imgNotFound =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastMovie(movieId)
      .then(setCast)
      .catch(error => {
        console.log('error :>> ', error);
      });
  }, [movieId]);

  return (
    <>
      <ul className={sass.characterInfo}>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={profile_path ? imgBaseUrl.concat(profile_path) : imgNotFound}
              height={300}
              loading="lazy"
              alt="poster"
            />
            <div>
              <p className={sass.titleCharacter}>{name}</p>
              <p className={sass.titleCharacter}>Character : {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
