import React from 'react';
import { useMovieDetailQuery } from '../../../hooks/useMovieDetail';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DetailBanner.style.css'


const DetailBanner = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } =
    useMovieDetailQuery(id);
  console.log('detailbannerdata', data);
  //   error handling
  if (isLoading) {
    // 부트스트랩 로딩스피너 넣기
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w1066_and_h600_face${data?.backdrop_path}` +
          ')',
      }}
      className="detail-banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data?.title}</h1>
        <p>{data?.overview}</p>
      </div>
    </div>
  );
};

export default DetailBanner;
