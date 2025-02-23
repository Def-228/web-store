import { Link } from "react-router"

export const Header = () => {
    return (
        <header>
            <div>
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
                    </ul>
                </nav>
            </div>
        </header>
    )
}