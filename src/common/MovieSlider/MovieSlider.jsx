import React from 'react';
import './MovieSlider.style.css';
import CarouselPkg from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';


// react-multi-carousel이 CommonJS 방식으로 빌드되어 있어서, Vite 환경에서 import Carousel from 'react-multi-carousel' 하면 모듈 전체 객체가 와버림.
// 그래서 .default를 꺼내줘야 실제 컴포넌트를 가져올 수 있는 것임.
const Carousel = CarouselPkg.default || CarouselPkg;

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3>{title}</h3>

      <Carousel
        infinite={true}
        // centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
