import React from 'react';

import { Alert } from 'react-bootstrap';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {
  // 영화 데이터 들고오기
  const { data, isLoading, isError, error } =
    useUpcomingMoviesQuery();

  // 에러 핸들링
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log('upcomingdata', data);

  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
