import React, { Component } from 'react';
import BarChart from 'react-bar-chart';

export default class Humidity extends Component {
  render() {
    const { forest, convertDate } = this.props;
    let itemDate;
    
    const data = forest.map(element => {
      itemDate = convertDate(element.date);
        return {
          text: itemDate,
          value: element.humidity
        };
    });
    const margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
          };
    return (
      <div className="humidity diagram">
            <BarChart
              width={1000}
              height={400}
              margin={margin}
              data={data}
            />
      </div>
    );
  }
}
