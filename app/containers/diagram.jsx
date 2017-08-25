import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import { setParamDiagram } from '../actions/params';

class Diagram extends Component {
	handleChange = (value) => {
	  	this.props.setParamDiagram(value);
	};
	render() {
		const {
			diagram
		} = this.props;

		return (
			<div className="diagram-container">
				<h3>Forecast 16 days</h3>
				    <Tabs value={this.props.paramDiagram} onChange={this.handleChange}>
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
const mapStateToProps = state => {
 return {
  	paramDiagram: state.paramDiagram,
  };
};
const mapDispatchToProps = dispatch => ({
    setParamDiagram: (value) => dispatch(setParamDiagram(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Diagram);
