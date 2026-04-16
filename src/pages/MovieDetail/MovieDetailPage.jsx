import React from 'react';
import DetailBanner from './DetailBanner/DetailBanner';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieReviews from './MovieReviews/MovieReviews';

const MovieDetailPage = () => {
  return (
    <div>
      <DetailBanner />
      <MovieInfo />
      <MovieReviews />
    </div>
  );
};

export default MovieDetailPage;
