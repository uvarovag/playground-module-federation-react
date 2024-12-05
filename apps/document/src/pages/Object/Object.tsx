import { useParams } from 'react-router'

import { useBerryQuery } from 'entities/berry'

export const Object = () => {
    const { objectId } = useParams()
    const { data } = useBerryQuery(objectId ?? '', { skip: !objectId })
    return (
        <>
            <h2>Document Object Page</h2>
            <p>name: {data?.name}</p>
            <p>size: {data?.size}</p>
            <p>smoothness: {data?.smoothness}</p>
            <p>soil dryness: {data?.soil_dryness}</p>
        </>
    )
}
