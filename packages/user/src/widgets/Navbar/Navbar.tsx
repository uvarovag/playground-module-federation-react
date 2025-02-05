import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <Link to="/document">to document app</Link>
        </li>
        <li>
            <Link to="./">main</Link>
        </li>
    </ul>
)
