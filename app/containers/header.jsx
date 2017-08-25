import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import ChooseIcon from '../components/chooseicon.jsx';
import { setFilter } from '../actions/params';
import {fetchForest} from '../actions/getdata';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
	      city: ''
	    };

		this.updateCity = this.updateCity.bind(this);
		this.searchCity = this.searchCity.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}
	searchCity(ev) {
		ev.preventDefault();
		const { city } = this.state;
		const {searchCity, getData} = this.props;
		searchCity(city);
		getData(city);
		this.clearForm();
	}
	updateCity(ev) {
		this.setState({city: ev.target.value});
	}
	clearForm() {
	    this.setState({city: ''});
	  }
	render() {
		return (
			<header>
				<div className="title">
					<ChooseIcon />
					<p>Forecast</p>
				</div>
				<form onSubmit={this.searchCity}>
					<TextField
				      hintText="Please enter your city"
				      floatingLabelText="City"
				      onChange={this.updateCity}
				      value={this.state.city}
				    />
				</form>
			</header>
		 );
	}
}

const mapStateToProps = state => {
  return {
	city: state.filter
  };
};
const mapDispatchToProps = dispatch => {
	return {
		searchCity: city => dispatch(setFilter(city)),
		getData: city => dispatch(fetchForest(city))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
