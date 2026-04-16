import React from 'react';
import {
  Alert,
  Badge,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import { useParams } from 'react-router';
import { useMovieDetailQuery } from '../../../hooks/useMovieDetail';

const MovieInfo = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } =
    useMovieDetailQuery(id);

  //   error handling
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container
      fluid
      className="bg-black text-white"
      style={{ minHeight: '100vh' }}
    >
      <Row>
        <Col lg={6} xs={12}>
          <img
            src={`https://media.themoviedb.org/t/p/w1066_and_h600_face${data?.poster_path}}`}
          />
        </Col>
        <Col lg={6} xs={12}>
          <div>
            {/* 장르 보여주기 */}
            {data?.genres?.map((genre) => (
              <Badge key={genre.id} bg="danger">
                {genre.name}
              </Badge>
            ))}
          </div>
          <Row>{data?.title} </Row>
          <Row>{data?.overview}</Row>
          <Row>
            {data?.adult ? 'Over 18' : 'Under 18'}
            {`인기도: ${data?.popularity}`}
            {`평점: ${data?.vote_average}`}
          </Row>
          <Row>
            <div>{`예산: ${data?.budget}`}</div>
            <div>{`러닝타임: ${data?.runtime} Min`}</div>
            <div>{`개봉일: ${data?.release_date}`}</div>
            <div>{`예산: ${data?.budget}`}</div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieInfo;
