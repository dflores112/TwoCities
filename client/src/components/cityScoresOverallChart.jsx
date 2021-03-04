import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrap = styled.div`
margin: auto;
width: 65%;
padding: 10px;
`;
function CityScoresOverallChart(props) {
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
    <ChartWrap>
      <Bar
        data={data}
        height={400}
        width={800}
      />
    </ChartWrap>

  );
}

export default CityScoresOverallChart;
