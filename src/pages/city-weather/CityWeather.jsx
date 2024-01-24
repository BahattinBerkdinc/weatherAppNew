import React from 'react'
import { useParams } from 'react-router-dom'
import DetailContainer from '../../containers/detail-container/DetailContainer';

const CityWeather = () => {

    const { id, lat, lon } = useParams()

    return (
        <div>
            <DetailContainer id={id} lat={lat} lon={lon} />
        </div>
    )
}

export default CityWeather
