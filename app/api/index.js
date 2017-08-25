import { API_KEY } from '../constants';

export function getWeatherData(filter) {
    const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${filter}&cnt=16&APPID=${API_KEY}`;
    return fetch(URL).then(res => res.json());
}
