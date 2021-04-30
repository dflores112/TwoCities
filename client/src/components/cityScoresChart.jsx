import React from 'react';
import { Bar } from 'react-chartjs-2';

function CityScoresChart(props) {
  const data = {
    labels: ['Housing', 'Cost of Living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom', 'Safety', 'Healthcare', 'Education', 'Enviromental Quality', 'Economy', 'Internet Access', 'Leisure & Culture', 'Tolerance', 'Outdoors'],
    datasets: [
    ],
  };
  if (props.cityScores.length) {
    if (props.cityScores.length === 1) {
      data.datasets.push({
        label: props.cityScores[0].name,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        data: props.cityScores[0].stats,
      });
    } else {
      const temp1 = [{
        label: props.cityScores[0].name,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        data: props.cityScores[0].stats,
      }, {
        label: props.cityScores[1].name,
        backgroundColor: 'rgba(235, 115, 38, 0.3)',
        borderColor: 'rgba(235, 115, 38, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(235, 115, 38, 0.8)',
        hoverBorderColor: 'rgba(235, 115, 38, 0.8)',
        data: props.cityScores[1].stats,
      }];
      data.datasets = temp1;
    }
  }

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

export default CityScoresChart;
