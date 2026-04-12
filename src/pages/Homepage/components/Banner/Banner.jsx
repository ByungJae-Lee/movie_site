import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';

import './Banner.style.css';
import { Alert } from 'react-bootstrap';

const Banner = () => {
  const { data, isLoading, isError, error } =
    usePopularMoviesQuery();
  console.log('bannerdata', data);
  //   error handling
  if (isLoading) {
    // 부트스트랩 로딩스피너 넣기
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  //   data의 첫번째 영화를 배너 표지로 보여줄 것임
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w1066_and_h600_face${data?.results[0].poster_path}` +
          ')',
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
