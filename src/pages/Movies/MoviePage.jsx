import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router';
import {
  Alert,
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import PaginatePkg from 'react-paginate';

import MovieCard from '../../common/MovieCard/MovieCard';

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword 입력해서 온 경우 => keyword 관련된 영화들을 보여줌

// 페이지 네이션 설치
// page state만들기
// 페이지 네이션 클릭때마다 page바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch


const MoviePage = () => {
  const ReactPaginate = PaginatePkg.default || PaginatePkg;
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');



  const { data, isLoading, isError, error } =
    useSearchMovieQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  console.log('ddd', data);




  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }



  return (
    <Container
      className="bg-black text-white"
      style={{ minHeight: '100vh' }}
    >
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
                
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );

  // <div className="bg-black text-white">MoviePage</div>;
};

export default MoviePage;
