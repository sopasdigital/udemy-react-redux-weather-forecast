import Axios from 'axios';

//  Weather app key
const API_KEY = 'a2f8768f12720457681774c3af191535';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {  
  const url =`${ROOT_URL}&q=${city},ph`;
  const request = Axios.get(url);

  return {
    type : FETCH_WEATHER,
    payload: request 
  };
}
