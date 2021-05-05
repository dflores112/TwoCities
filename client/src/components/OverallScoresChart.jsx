import React from 'react';
import { Bar } from 'react-chartjs-2';

function OverallScoresChart(props) {
  const names = props.cities.map((city) => city.name);
  const scores = props.cities.map((city) => city.overall);
  const data = {
    labels: names,
    datasets: [
      {
        label: 'Overall City Score',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        data: scores,
        labelColor: 'rgb(102, 255, 204)',
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 18,
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: 'white',
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white',
          fontSize: 10,
          stepSize: 1,
          beginAtZero: true,
        },
      }],
    },
  };

  return (
      <Bar
        data={data}
        options={options}
      />
  );
}

export default OverallScoresChart;
