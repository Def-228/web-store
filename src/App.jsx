import { Route, Routes } from 'react-router-dom';
import { HomePage }from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
    
  );
}