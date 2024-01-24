import React, { useEffect, useState } from 'react'
import "./detail-container.scss"


import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { getAllCities } from '../../api-service/api';
import { useSelector } from 'react-redux';
import Loading from '../../components/loading/Loading';

//icon
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { swalToast } from '../../helpers/swalToast';

const DetailContainer = ({ id, lat, lon }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const apikey = useSelector((state) => state.key.key)

    const loadData = async () => {
        setLoading(true)
        try {
            const resp = await getAllCities(lat, lon, apikey)
            setData(resp.data)
            setLoading(false)
        } catch (error) {
            swalToast("Hata", "Beklenmeyen bir hata oluştu", "error")
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [])


    if (!data || !data.weather || data.weather.length === 0) {
        return <Loading />;
    }



    return (
        <div id='detail-container'>
            <div className="left">
                <div className="city-name">
                    <span>{id}</span>
                    <span>{data.name.toUpperCase()}</span>
                </div>
                <img src={`https://openweathermap.org/img/w/${data?.weather?.[0].icon}.png`} style={{ width: "60px", margin: "0 auto" }} alt="" />
                <p>"{data?.weather?.[0]?.description}"</p>
                <div className="short-infos">
                    <div><WiHumidity /><span>Sıcaklık</span> <span>{data?.main?.temp.toFixed(0)}°</span></div>
                    <div><CiTempHigh /><span>Nem</span> <span>{data?.main?.humidity.toFixed(0)}%</span></div>
                    <div><LuWind /><span>Ruzgar</span> <span>{data?.wind?.speed.toFixed(1)}<span className='humidity'>km/h</span> </span></div>
                </div>
                <div className="right">
                    <span>Diğer Bilgiler</span>
                    <div className="other-infos">
                        <div>
                            <span>Hissedilen Sıcaklık</span>
                            <span>{data?.main?.feels_like.toFixed(0)}°</span>
                        </div>
                        <div>
                            <span>Minimum Sıcaklık</span>
                            <span>{data?.main?.temp_min.toFixed(0)}°</span>
                        </div>
                        <div>
                            <span>Maksimum Sıcaklık</span>
                            <span>{data?.main?.temp_max.toFixed(0)}°</span>
                        </div>
                        <div>
                            <span>Basınç</span>
                            <span>{data?.main?.pressure.toFixed(0)}</span>
                        </div>
                    </div>
                </div>
                <div className="back-btn" onClick={() => navigate(-1)}><BsChevronLeft /></div>
            </div>

        </div>
    )
}

export default DetailContainer
