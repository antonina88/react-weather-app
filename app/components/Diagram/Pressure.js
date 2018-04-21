import React from 'react';
import DiagramContainer from './DiagramContainer';

const Pressure = ({ forecast, convertDate }) => {
  const data = forecast.map(element => {
    return {
      text: convertDate(element.date),
      value: element.pressure
    };
  });

  return (
    <DiagramContainer
      diagramClass="pressure diagram"
      data={data}
    />
  );
};

export default Pressure;
