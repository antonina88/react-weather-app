import { getWeatherData } from '../../api';
import { GET_LOCALITY, GET_WEATHER_CONDITIONS } from '../../constants';

export const getWeatherConditions = (data) => ({
  type: GET_WEATHER_CONDITIONS,
  data
});

export const getLocality = (city, country) => ({
  type: GET_LOCALITY,
  city,
  country
});

export const fetchForecast = filter => {
  return (dispatch) => {
    getWeatherData(filter)
      .then(res => {
        const { name: city, country } = res.city;

        dispatch(getLocality(city, country));

        return res;
      })
      .then(res => {
        const data = res.list.map((item, index) => {
          return {
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
        });

        dispatch(getWeatherConditions(data));
    });
  };
};
