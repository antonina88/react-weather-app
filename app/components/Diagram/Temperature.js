import React from 'react';
import DiagramContainer from './DiagramContainer';

const Temperature = ({ forecast, convertDate }) => {
  const data = forecast.map(element => {
    return {
      text: convertDate(element.date),
      value: Math.round(element.max - 273.15)
    };
  });

  return (
    <DiagramContainer
      diagramClass="temperature diagram"
      data={data}
    />
  );
};

export default Temperature;
