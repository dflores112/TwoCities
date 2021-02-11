import React from 'react';
import { Bar } from 'react-chartjs-2';

function CityScoresOverallChart(props) {
  const names = props.cities.map((city) => city.name);
  const scores = props.cities.map((city) => city.overall);
  const data = {
    labels: names,
    datasets: [
      {
        label: 'Overall City Score',
        backgroundColor: 'rgba(147,225,216, 0.3)',
        borderColor: 'rgba(147,225,216, 0.9)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(147,225,216, 0.3)',
        hoverBorderColor: 'rgba(147,225,216, 0.9)',
        data: scores,
      },
    ],
  };
  return (
    <Bar
      data={data}
      height={500}
      width={800}
    />
  );
}

export default CityScoresOverallChart;
