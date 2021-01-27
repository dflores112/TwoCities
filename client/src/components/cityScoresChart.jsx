import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrap = styled.div`
height: 500px;
width: 500px;
`;
function cityScoresChart(props) {
  const data = {
    labels: ['Housing', 'Cost of Living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom', 'Safety', 'Healthcare', 'Education', 'Enviromental Quality', 'Economy', 'Internet Access', 'Leisure & Culture', 'Tolerance', 'Outdoors'],
    datasets: [
      {
        label: 'Anchorage',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [5.4, 3.1, 2.7, 0, 1.7, 4.7, 8.6, 3.4, 8.6, 3.6, 9.2, 6.5, 4.7, 4.9, 3.2, 7.0, 5.3],
      },
    ],
  };
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

export default cityScoresChart;
