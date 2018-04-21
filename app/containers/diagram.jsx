import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';

import { setParamDiagram } from '../actions/params';
import { Wind, Humidity, Pressure, Temperature } from '../components/Diagram';

class Diagram extends Component {
  getDiagram = (forecast, params) => {
    let diagram;

    switch (params) {
      case 'wind': {
        diagram = <Wind forecast={forecast} convertDate = {this.convertDate} />;
        break;
      }
      case 'temperature': {
        diagram = <Temperature forecast = {forecast} convertDate = {this.convertDate}/>;
        break;
      }
      case 'pressure': {
        diagram = <Pressure forecast = {forecast} convertDate = {this.convertDate} />;
        break;
      }
      case 'humidity': {
        diagram = <Humidity forecast = {forecast} convertDate = {this.convertDate} />;
        break;
      }
      default: {
        diagram = null;
      }
    }

    return diagram;
  }

  convertDate = (dateElem) => {
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const itemDate = new Date(dateElem * 1000);
    const date = itemDate.getDate();
    const numbMonth = itemDate.getMonth();
    const month = monthArr[numbMonth];
    const abridgeMonth = month.substring(0, 3);
    return `${date} ${abridgeMonth}`;
  }

  handleChange = (value) => {
    this.props.setParamDiagram(value);
  }

  render() {
    const { forecast, paramDiagram } = this.props;
    const diagram = this.getDiagram(forecast, paramDiagram);

    return (
      <div className="diagram-container">
        <h3>Forecast 16 days</h3>
          <Tabs value={paramDiagram} onChange={this.handleChange}>
            <Tab label="Temperature" value="temperature">
              {diagram}
            </Tab>
            <Tab label="Pressure" value="pressure">
              {diagram}
            </Tab>
            <Tab label="Humidity" value="humidity">
              {diagram}
            </Tab>
            <Tab label="Wind" value="wind">
              {diagram}
            </Tab>
          </Tabs>
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  paramDiagram: state.paramDiagram,
  forecast: state.weatherConditions,
});

const mapDispatchToProps = (dispatch) => ({
  setParamDiagram: (value) => dispatch(setParamDiagram(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Diagram);
