import React from 'react';
import DiagramContainer from './DiagramContainer';

const Humidity = ({ forecast, convertDate }) => {
  const data = forecast.map(element => {
    return {
      text: convertDate(element.date),
      value: element.humidity
    };
  });

  return (
    <DiagramContainer
      data={data}
      diagramClass="humidity diagram"
    />
  );
};

export default Humidity;
