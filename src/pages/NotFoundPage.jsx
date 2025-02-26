import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <p className="not-found-message">
        Проверьте URL или <Link to="/">return to home</Link>.
      </p>
    </div>
  );
}

export default NotFoundPage;