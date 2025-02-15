import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <Link to="/document">to document app</Link>
        </li>
        <li>
            <Link to="/user">main</Link>
        </li>
    </ul>
)
