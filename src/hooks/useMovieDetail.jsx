import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieDetail = (id) => {
  return api.get(`/movie/${id}`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ['movie-detail', id],
    queryFn: ()=> fetchMovieDetail(id),
    // 선택적으로 자료 가져오기
    select: (result) => result.data,
  });
};
