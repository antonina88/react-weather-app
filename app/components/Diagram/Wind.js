import React from 'react';
import DiagramContainer from './DiagramContainer';

const Wind = ({ forecast, convertDate }) => {
  const data = forecast.map(element => {
    return {
      text: convertDate(element.date),
      value: element.wind
    };
  });

  return (
    <DiagramContainer
      diagramClass="wind diagram"
      data={data}
    />
  );
};

export default Wind;
