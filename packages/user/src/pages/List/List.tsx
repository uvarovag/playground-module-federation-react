import { Link } from 'react-router'

import { usePokemonsQuery } from 'entities/pokemon'

export const List = () => {
    const { data } = usePokemonsQuery('')
    return (
        <>
            <h2>user list page</h2>
            <ul>
                {data?.results.map(({ name }) => (
                    <li key={name}>
                        <Link to={name}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
