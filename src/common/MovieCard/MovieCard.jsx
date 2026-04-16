import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router';

const MovieCard = ({ movie }) => {
  // data:~~~ <- 이 이름으로 재 정의 하겠다.
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  // 카드 클릭시 이동
  const goToDetailPage = () => {
    navigate(`/movies/${movie.id}`);
  };
  // 장르나열
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find(
        (genre) => genre.id === id,
      );
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url(' +
            `https://media.themoviedb.org/t/p/w300${movie.poster_path}` +
            ')',
        }}
        className="movie-card"
        onClick={goToDetailPage} 
      >
        <div className="overlay">
          <h1>{movie.title}</h1>
          {/* 장르 보여주기 */}
          {showGenre(movie.genre_ids).map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
          <div>
            <div>{`Rating : ${movie.vote_average.toFixed(1)}`}</div>
            <div>{`Popularity : ${movie.popularity}`}</div>
            <div>{movie.adult ? `Over 18` : `Under 18`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
