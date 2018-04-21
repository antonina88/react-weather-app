import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchForecast} from '../actions/getdata';
import ChooseIcon from '../components/ChooseIcon';

class WeatherData extends Component {
  componentDidMount() {
    this.props.getData(this.props.filter);
  }

  onCelsium = (temperature) => {
    return Math.round(temperature - 273.15);
  }

  render() {
    const { locality, forecast } = this.props;

    const localityCity = locality
      ? (<h1>{locality.city}, {locality.country} </h1>)
      :  null;

    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const numbMonth = currentDate.getMonth();
    const month = monthArr[numbMonth];
    const date = currentDate.getDate();
    const numbDay = currentDate.getDay();
    const day = days[numbDay];

    const currentDay = forecast[0];
    let currentTemperature;

    let pressure;
    let humidity;
    let wind;
    let clouds;
    let description;

    if (currentDay) {
      pressure = currentDay.pressure;
      humidity = currentDay.humidity;
      wind = currentDay.wind;
      clouds = currentDay.clouds;
      description = currentDay.description;

      if (currentHours > 0 && currentHours < 6) {
        currentTemperature = this.onCelsium(currentDay.night);
      } else if (currentHours >= 6 && currentHours < 12) {
        currentTemperature = this.onCelsium(currentDay.morn);
      } else if (currentHours >= 12 && currentHours < 17) {
        currentTemperature = this.onCelsium(currentDay.day);
      } else if (currentHours >= 17 && currentHours < 24) {
        currentTemperature = this.onCelsium(currentDay.eve);
      }
    }

    return (
      <div className="data-container">
        <div className="date">{day}, {date} {month}</div>
        {localityCity}
        <h2 className="temperature">{currentTemperature}&deg;C</h2>
        <div className="summary">
          <ChooseIcon />
          <p>{description}</p>
        </div>
        <div className="parametres">
          <p className="pressure"><span>Pressure:</span> {pressure}&nbsp;hPa</p>
          <p className="humidity"><span>Humidity:</span> {humidity}&nbsp;%</p>
          <p className="windSpeed"><span>Wind Speed:</span> {wind}&nbsp;m/s</p>
          <p className="clouds"><span>Clouds:</span> {clouds}&nbsp;%</p>
        </div>
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  locality: state.locality,
  forecast: state.weatherConditions,
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  getData: (filter) => dispatch(fetchForecast(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
