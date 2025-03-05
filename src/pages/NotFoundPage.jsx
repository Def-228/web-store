import { Link } from 'react-router';
import styles from '../styles/NotFound.module.css'

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.number}>404</h1>
      <p className={styles.text}>Страница не найдена</p>
      <li>
        <Link to="/">Return to home</Link>
      </li>
    </div>
  );
}