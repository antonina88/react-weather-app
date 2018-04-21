import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import ChooseIcon from '../components/ChooseIcon';
import { setFilter } from '../actions/params';
import { fetchForecast } from '../actions/getdata';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
  }

  updateCity = (ev) => {
    ev.preventDefault();
    const { city } = this.state;

    this.props.searchCity(city);
    this.props.getData(city);
    this.clearForm();
  }

  handleCity = (ev) => {
    this.setState({
      city: ev.target.value,
    });
  }

  clearForm = () => {
    this.setState({ city: '' });
  }

  render() {
    const { city } = this.state;

    return (
      <header>
        <div className="title">
          <ChooseIcon />
          <p>Forecast</p>
        </div>
        <form onSubmit={this.updateCity}>
          <TextField
            hintText="Please enter your city"
            floatingLabelText="City"
            onChange={this.handleCity}
            value={city}
          />
        </form>
      </header>
     );
  }
}

const mapStateToProps = (state) => ({
  city: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  searchCity: (city) => dispatch(setFilter(city)),
  getData: (city) => dispatch(fetchForecast(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
