import { useParams } from 'react-router'

import { usePokemonQuery } from 'entities/pokemon'

export const Object = () => {
    const { objectId } = useParams()
    const { data } = usePokemonQuery(objectId ?? '', { skip: !objectId })
    return (
        <>
            <h2>user object page</h2>
            <p>name: {data?.name}</p>
            <p>order: {data?.order}</p>
            <p>weight: {data?.weight}</p>
            <p>base experience: {data?.base_experience}</p>
        </>
    )
}
