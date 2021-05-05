import React from 'react';
import { Line } from 'react-chartjs-2';
import Styles from './Styled.jsx';

function CostOfLivingChart({localPrices}) {
  const labels = localPrices.map((item) => item.label);
  const prices = localPrices.map((item) => item.currency_dollar_value);
  const {name} = localPrices[9];
  labels.pop();
  prices.pop();
  const data = {
    labels,
    datasets: [
      {
        label: name,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        data: prices,
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
