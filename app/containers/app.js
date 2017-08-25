import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header.jsx';
import WeatherData from './weatherdata.jsx';
import Diagram from './diagram.jsx';
import FooterBlock from '../components/footerblock.jsx';

import Wind from '../components/wind.jsx';
import Pressure from '../components/pressure.jsx';
import Temperature from '../components/temperature.jsx';
import Humidity from '../components/humidity.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.convertDate = this.convertDate.bind(this);
	}
	convertDate(dateElem) {
		const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const itemDate = new Date(dateElem * 1000);
        const date = itemDate.getDate();
        const numbMonth = itemDate.getMonth();
        const month = monthArr[numbMonth];
        const abridgeMonth = month.substring(0, 3);
        const fullDate = `${date} ${abridgeMonth}`;
        return fullDate;
    }
    render() {
    	const { forest } = this.props;
		let diagram;

		switch (this.props.paramDiagram) {
		    case 'wind': {
		        diagram = <Wind forest={forest} convertDate = {this.convertDate} />;
		        break;
		    }
		    case 'temperature': {
		        diagram = <Temperature forest = {forest} convertDate = {this.convertDate}/>;
		        break;
		    }
		    case 'pressure': {
		        diagram = <Pressure forest = {forest} convertDate = {this.convertDate} />;
		        break;
		    }
		    case 'humidity': {
		        diagram = <Humidity forest = {forest} convertDate = {this.convertDate} />;
		        break;
		    }
		    default: {
		        diagram = null;
		    }
		}
		return (
	    	<div className="wrapper">
		        <div className="content">
		        	<Header />
			        <WeatherData />
			        <Diagram diagram = {diagram} />
		        </div>
		        <FooterBlock />
		     </div>
	    );
	}
}
const mapStateToProps = state => {
	return {
	  	paramDiagram: state.paramDiagram,
	  	forest: state.weatherConditions
	  };
};
export default connect(mapStateToProps)(App);


