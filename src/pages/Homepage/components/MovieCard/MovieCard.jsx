import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css'
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url(' +
            `https://media.themoviedb.org/t/p/w300${movie.poster_path}` +
            ')',
        }}
        className='movie-card'
      >
        <div className='overlay'>
          <h1>{movie.title}</h1>
          {movie.genre_ids.map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
          <div>
            <div>{`Rating : ${movie.vote_average.toFixed(1)}` }</div>
            <div>{`Popularity : ${movie.popularity}`}</div>
            <div>{movie.adult  ? `Over 18` : `Under 18`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
