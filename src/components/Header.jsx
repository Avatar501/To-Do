import { Link, useLocation } from 'react-router-dom';
import '../styles.css';

function Header() {
    const location = useLocation();

    return (
        <header>
            <h1>Task Manager</h1>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    Home
                </Link>
                <Link
                    to="/login"
                    className={location.pathname === '/login' ? 'active' : ''}
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className={location.pathname === '/register' ? 'active' : ''}
                >
                    Register
                </Link>
            </nav>
        </header>
    );
}

export default Header;
