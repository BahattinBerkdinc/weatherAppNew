import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

export const getAllCities = (lat, lon, key) => {
    return axios.get(`${API_URL}lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=tr`)
}