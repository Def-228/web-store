import { Link } from "react-router"
import styles from "../styles/Header.module.css"

export const Header = ({ user, onLogout }) => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h2>Exclusive</h2>
            </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        
                        <li className={styles.products}>
                            <Link to='/products'>Our Products</Link>
                        </li>
                        {user ? (
                        <li className={styles.signOut}>
                            <button onClick={onLogout}>Log Out</button>
                        </li>
                        ) : (
                            <>
                                <li className={styles.signIn}>
                                    <Link to='/sign-in'>Log in</Link>
                                </li>
                                <li className={styles.signUp}>
                                    <Link to='/sign-up'>Sign up</Link>
                                </li>
                            </>
                        )} 
                        <li className={styles.search}>
                            <input type="text" placeholder="Search..." />
                        </li>    
                    </ul>
                </nav>
        </header>
    )
}