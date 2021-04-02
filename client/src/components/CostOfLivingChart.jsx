import React from 'react';
import { Line } from 'react-chartjs-2';
import Styles from './Styled.jsx';


function CostOfLivingChart(props) {
  const data = {
    labels: ['Movie ticket'],
    datasets: [
      {
        label: 'Cost of Living',
        backgroundColor: 'rgba(103,170,249, 0.3)',
        borderColor: 'rgba(103,170,249, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(103,170,249, 0.8)',
        hoverBorderColor: 'rgba(103,170,249, 0.8)',
        data: [2],
      },
    ],
  };

  return(
    <Styles.Container>
    <Line
    data={data}

    />
    </Styles.Container>

  )
}

export default CostOfLivingChart;
