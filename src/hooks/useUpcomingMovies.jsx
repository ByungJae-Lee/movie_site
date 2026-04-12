import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

// API호출하는 hook

const fetchUpcomingMovies = () => {
  return api.get(`/movie/upcoming`);
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-upcoming'],
    queryFn: fetchUpcomingMovies,
    // 선택적으로 자료 가져오기
    select: (result) => result.data,
  });
};
