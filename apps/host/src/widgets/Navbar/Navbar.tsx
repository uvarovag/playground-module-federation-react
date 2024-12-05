import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <Link to="./">host</Link>
        </li>
        <li>
            <Link to="document">document</Link>
        </li>
        <li>
            <Link to="user">user</Link>
        </li>
    </ul>
)
