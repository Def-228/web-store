import { Link } from "react-router"
import styles from "../styles/Header.module.css"

export const Header = () => {
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
                        <li>
                            <Link to='sign-in'>Log in</Link>
                        </li>
                        <li>
                            <Link to='sign-up'>Sign up</Link>
                        </li>
                        <li>
                            <Link to='products'>Our Products</Link>
                        </li>
                        <li>
                            <Link to='wishlist'>Wishlist</Link>
                        </li>
                        <li>
                            <Link to='cart'>Cart</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}