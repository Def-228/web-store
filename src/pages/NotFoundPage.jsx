import { Link } from 'react-router-dom';
import styles from "../styles/NotFound.module.css"

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <h2>Your visited page not found. You may go home page.</h2>
      <div className={styles.message}>
        <Link to="/"
         className={styles.button}>Back to home page</Link>
      </div>
    </div>
  );
}