import React from 'react';

import { Alert } from 'react-bootstrap';
import './UpcomingMovieSlide.style.css'
import 'react-multi-carousel/lib/styles.css';
import CarouselPkg from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';

// react-multi-carousel이 CommonJS 방식으로 빌드되어 있어서, Vite 환경에서 import Carousel from 'react-multi-carousel' 하면 모듈 전체 객체가 와버림.
// 그래서 .default를 꺼내줘야 실제 컴포넌트를 가져올 수 있는 것임.
const Carousel = CarouselPkg.default || CarouselPkg;


//   슬라이드 response
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1350 },
    //   보여줄 카드갯수
    items: 6,
  },
  laptop: {          // ← 추가
    breakpoint: { max: 1350, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 465 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
  console.log('upcomingdata',data)

  return (
    <div>
      <h3>Upcoming Movies</h3>

      <Carousel
        infinite={true}
        // centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default UpcomingMovieSlide;
