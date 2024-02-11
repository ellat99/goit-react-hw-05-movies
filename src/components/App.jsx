import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ShareLayout } from './SearchInput/SearchInput';
const Trending = lazy(() => import('../pages/Trending/Trending'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  <Routes>
    <Route path="/" element={<ShareLayout />} />
    <Route index element={<Trending />} />
    <Route path="movies" element={<Movies />} />
    <Route path="movies/:id" element={<MoviesDetails />} />

    <Route path="cast" element={<Cast />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="*" element={<NotFound />} />
  </Routes>;
};
