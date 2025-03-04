import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import Header from './components/Header';

export function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}