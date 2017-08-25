import {getWeatherData} from '../../api';
import { GET_LOCALITY, GET_WEATHER_CONDITIONS } from '../../constants';

export const getLocality = (city, country) => ({
	type: GET_LOCALITY,
  city,
  country
});

export const getWeatherConditions = (data) => ({
  type: GET_WEATHER_CONDITIONS,
  data
});

export const fetchForest = filter => {
  return (dispatch) => {
    getWeatherData(filter).then((res) => {
      const city = res.city.name;
      const country = res.city.country;
      dispatch(getLocality(city, country));
      return res;
    })
    .then(res => {
        const days = res.list;
        let day = {
          id: null,
          clouds: '',
          date: null,
          humidity: null,
          pressure: null,
          wind: null,
          description: '',
          max: null,
          min: null,
          day: null,
          eve: null,
          morn: null,
          night: null
        };
        const data = days.map((item, index) => {
          day = {
            id: index,
            clouds: item.clouds,
            date: item.dt,
            humidity: item.humidity,
            pressure: Math.round(item.pressure),
            wind: item.speed,
            max: item.temp.max,
            min: item.temp.min,
            day: item.temp.day,
            eve: item.temp.eve,
            morn: item.temp.morn,
            night: item.temp.night,
            description: item.weather[0].main
          };
          return day;
        });
        dispatch(getWeatherConditions(data));
    });
  };
};
