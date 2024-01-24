import React, { useEffect, useState } from 'react'
import "./main-page.scss"
import CitiesList from '../components/cities-list/CitiesList'
import TurkeyMapCities from './TurkeyMapCities'

const MainPage = () => {



    const [cityList, setCityList] = useState(true)
    const [cityMap, setCityMap] = useState(false)

    const handleListChoose = (params) => {
        setCityList(true)
        setCityMap(false)
    }
    const handleMapChoose = (params) => {
        setCityMap(true)
        setCityList(false)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id='main-page' style={{ height: cityMap && "100vh" }}>
            <h1>Şehir Arama Yöntemi Seçin</h1>

            <div className='buttons'>
                <div onClick={handleListChoose} className={cityList ? 'active' : ''} >Şehir Listesi</div>
                <div onClick={handleMapChoose} className={cityMap ? 'active' : ''}>Ülke Haritası</div>
            </div>
            {
                cityList && <CitiesList />
            }
            {
                cityMap && <TurkeyMapCities />
            }

        </div>
    )
}

export default MainPage
