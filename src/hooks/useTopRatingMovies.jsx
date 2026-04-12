import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

// API호출하는 hook

const fetchTopRatingMovies = () => {
  return api.get(`/movie/top_rated`);
};

export const useTopRatingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-top_rated'],
    queryFn: fetchTopRatingMovies,
    // 선택적으로 자료 가져오기
    select: (result) => result.data,
  });
};
