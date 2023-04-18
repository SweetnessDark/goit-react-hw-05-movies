import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/apiMovies';
import sass from './Cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

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
              src={imgBaseUrl.concat(profile_path)}
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
