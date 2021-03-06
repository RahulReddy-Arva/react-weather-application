import axios from 'axios';

const API_KEY = '57786818a263c843eca37c0b83a526fd';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCHWEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('Request', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}