import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrap = styled.div`
height: 500px;
width: 500px;
`;

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
        backgroundColor: 'rgba(147,225,216, 0.3)',
        borderColor: 'rgba(147,225,216, 0.9)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(147,225,216, 0.9)',
        hoverBorderColor: 'rgba(147,225,216, 0.9)',
        data: props.cityScores[0].stats,
      });
    } else {
      const temp1 = [{
        label: props.cityScores[0].name,
        backgroundColor: 'rgba(147,225,216, 0.3)',
        borderColor: 'rgba(147,225,216, 0.9)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(147,225,216, 0.9)',
        hoverBorderColor: 'rgba(147,225,216, 0.9)',
        data: props.cityScores[0].stats,
      }, {
        label: props.cityScores[1].name,
        backgroundColor: 'rgba(103,170,249, 0.3)',
        borderColor: 'rgba(103,170,249, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(103,170,249, 0.8)',
        hoverBorderColor: 'rgba(103,170,249, 0.8)',
        data: props.cityScores[1].stats,
      }];
      data.datasets = temp1;
    }
  }

  return (
    <ChartWrap>
      <Bar
        data={data}
        height={500}
        width={500}
      />
    </ChartWrap>

  );
}

export default CityScoresChart;
