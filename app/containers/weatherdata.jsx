import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchForest} from '../actions/getdata';
import ChooseIcon from '../components/chooseicon.jsx';

class WeatherData extends Component {
	constructor(props) {
		super(props);
		this.onCelsium = this.onCelsium.bind(this);
	}
	componentDidMount() {
	    this.props.getData(this.props.filter);
	}

	onCelsium(temperature) {
		const celsiusTemperature  = Math.round(temperature - 273.15);
		return celsiusTemperature;
	}

	render() {
		const { locality, forest } = this.props;
		let id = 0;
		const localityCity = locality ? [<h1 key={++id}> {locality.city}, {locality.country} </h1>] :  null;
		const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		const currentDate = new Date();
		const currentHours = currentDate.getHours();
		const numbMonth = currentDate.getMonth();
		const month = monthArr[numbMonth];
		const date = currentDate.getDate();
		const numbDay = currentDate.getDay();
		const day = days[numbDay];

		const currentDay = forest[0];
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
const mapStateToProps = state => {
  return {
  	locality: state.locality,
  	forest: state.weatherConditions,
  	filter: state.filter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getData: filter => dispatch(fetchForest(filter))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
