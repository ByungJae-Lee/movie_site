import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
  // data:~~~ <- 이 이름으로 재 정의 하겠다.
  const { data: genreData } = useMovieGenreQuery();

  
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
      >
        <div className="overlay">
          <h1>{movie.title}</h1>
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
