import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

function OverallScoresChart(props) {
  const names = props.cities.map((city) => city.name);
  const scores = props.cities.map((city) => city.overall);
  const data = {
    labels: names,
    datasets: [
      {
        label: 'Overall City Score',
        backgroundColor: 'rgba(103,170,249, 0.3)',
        borderColor: 'rgba(103,170,249, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(103,170,249, 0.8)',
        hoverBorderColor: 'rgba(103,170,249, 0.8)',
        data: scores,
      },
    ],
  };
  return (
      <Bar
        data={data}
      />


  );
}

export default OverallScoresChart;
