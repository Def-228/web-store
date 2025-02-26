import { StrictMode } from 'react';
import './index.css'
import { App } from './App';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>

);