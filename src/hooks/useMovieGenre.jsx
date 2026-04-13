import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../utils/api';

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: [`movie-genre`],
    queryFn: fetchMovieGenre,
    // 필요한 데이터만 들고 오겠다.
    select: (result) => result.data.genres,
    // 자주 호출이 될 필요가 없을 때 정해주는 것 5분
    staleTime: 300000,
  });
};
