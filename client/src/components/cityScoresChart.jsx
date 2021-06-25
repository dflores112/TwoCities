import React from 'react';
import { Bar } from 'react-chartjs-2';
import Styles from './Styled.jsx';

function CityScoresChart(props) {
  const { removeCity,cityScores } = props;
  const data = {
    labels: ['Housing', 'Cost of Living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom', 'Safety', 'Healthcare', 'Education', 'Enviromental Quality', 'Economy', 'Internet Access', 'Leisure & Culture', 'Tolerance', 'Outdoors'],
    datasets: [
    ],
  };
  if (cityScores.length) {
    if (cityScores.length === 1) {
      data.datasets.push({
        label: cityScores[0].name,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        data: cityScores[0].stats,
      });
    } else {
      const temp1 = [{
        label: cityScores[0].name,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        data: cityScores[0].stats,
      }, {
        label: cityScores[1].name,
        backgroundColor: 'rgba(29,161,242, 0.3)',
        borderColor: 'rgba(29,161,242,0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(29,161,242,0.8)',
        hoverBorderColor: 'rgba(29,161,242,0.8)',
        data: cityScores[1].stats,
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

  function swap(i, newVal) {
    const temp = document.getElementById(i);
    if (temp.textContent === 'Remove') {
      temp.textContent = newVal;
    } else {
      temp.textContent = 'Remove';
    }
  }


  const cityNames = cityScores.map((city, i) => (
    <Styles.CityNameButton type="button" id={i} onClick={() => removeCity(i)} onMouseEnter={() => swap(i, city.name)} onMouseLeave={() => swap(i, city.name)}>
      {' '}
      {city.name}
    </Styles.CityNameButton>
  ));
  return (
    <>
      {cityNames}
      <Bar
        data={data}
        options={options}
      />
    </>
  );
}

export default CityScoresChart;
