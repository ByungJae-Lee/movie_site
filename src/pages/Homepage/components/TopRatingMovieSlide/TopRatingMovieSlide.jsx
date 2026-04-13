import React from 'react';
import { useTopRatingMoviesQuery } from '../../../../hooks/useTopRatingMovies';
import { Alert } from 'react-bootstrap';
import responsive from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopRatingMovieSlide = () => {
  // 영화 데이터 들고오기
  const { data, isLoading, isError, error } =
    useTopRatingMoviesQuery();

  // 에러 핸들링
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Top Rating Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatingMovieSlide;
