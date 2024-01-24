import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react'
import cities from "../helpers/turkey-cities.json"
import { useNavigate } from 'react-router-dom'
import { swalToast } from '../helpers/swalToast'

const TurkeyMapCities = () => {

    const [selectedCity, setSelectedCity] = useState([])
    const navigate = useNavigate()

    const handleCityClick = (city) => {
        setSelectedCity(city);
        const selectedCityData = cities.find((c) => c.plaka === city.plateNumber);

        if (selectedCityData) {
            const { plaka, lon, lat } = selectedCityData;
            navigate(`/${plaka}/${lat}/${lon}`);

        } else {
            swalToast("Hata", "Sehir bulunamadi", "error");
        }
    };



    return (
        <div>
            <TurkeyMap hoverable={true}
                customStyle={{ idleColor: "lightblue", hoverColor: "grey" }}
                showTooltip={true}
                onClick={(city) => handleCityClick(city)} />
        </div>
    )
}

export default TurkeyMapCities
