import { Route, Routes } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import MoviePage from './pages/Movies/MoviePage';
import NotFoundPage from './pages/NoteFoundPage/NotFoundPage';

// 홈페이지 /
// 영화 전체 보여주는 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id

function App() {
  return (
    <div >
      <Routes>
        {/* AppLayout: navbar */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          {/* moveis 사용하는 Route 포함해주기 */}
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>

        {/* NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
