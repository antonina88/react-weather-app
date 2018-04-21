import React from 'react';
import BarChart from 'react-bar-chart';

const DiagramContainer = ({ data, diagramClass }) =>  {
  const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  };

  return (
    <div className={diagramClass}>
      <BarChart
        width={1000}
        height={400}
        margin={margin}
        data={data}
      />
    </div>
  );
};

export default DiagramContainer;
