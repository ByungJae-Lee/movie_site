import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

// API호출하는 hook

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    // 선택적으로 자료 가져오기
    select: (result) => result.data,
  });
};
