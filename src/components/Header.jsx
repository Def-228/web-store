import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate('/not-found');
    setSearchText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h2>Exclusive</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Our Products</Link></li>
          <li><Link to="/sign-in">Log in</Link></li>
          <li><Link to="/sign-up">Sign up</Link></li>
          <li className={styles.search}>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearchSubmit}></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;