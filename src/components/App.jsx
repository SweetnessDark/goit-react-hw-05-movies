import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';

const Home = lazy(() => import('pages/Home/Home'));

const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));

const Movies = lazy(() => import('pages/Movies/Movies'));

const Cast = lazy(() => import('./Cast/Cast'));

const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />}></Route>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
