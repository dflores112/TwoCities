import React from 'react';
import { Line } from 'react-chartjs-2';
import Styles from './Styled.jsx';

function CostOfLivingChart({ localPrices }) {
  const data = {
    labels: ['A Kilogram of Apples', 'Bread', 'A Cappucino', 'Movie Ticket', 'Gym Membership', 'A beer', 'Monthly public transportation', 'Lunch', '5km taxi ride'],
    datasets: [
    ],
  };
  if (localPrices.length) {
    if (localPrices.length === 1) {
      data.datasets.push({
        label: localPrices[0].name,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        data: localPrices[0].stats,
        fill: false,
        tension: 0.1,
      });
    } else {
      const temp1 = [{
        label: localPrices[0].name,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        data: localPrices[0].stats,
        fill: false,
        tension: 0.1,
      }, {
        label: localPrices[1].name,
        borderColor: 'rgba(29,161,242,0.8)',
        borderWidth: 1,
        data: localPrices[1].stats,
        fill: false,
        tension: 0.1,
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
    <Styles.Container>
      <Styles.CostHeader>
        Cost of Living
      </Styles.CostHeader>
      <Line
        data={data}
        options={options}
      />
    </Styles.Container>

  );
}

export default CostOfLivingChart;
