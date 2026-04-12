import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatingMovieSlide from './components/TopRatingMovieSlide/TopRatingMovieSlide';
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';

// 1. 배너 만들기 => popular 영화를 들고와서 첫번째 아이템 보여줄 것임
// 1-1. API호출
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div className="bg-black text-white">
      <Banner />
      <PopularMovieSlide />
      <TopRatingMovieSlide/>
      <UpcomingMovieSlide/>
    </div>
  );
};

export default Homepage;
