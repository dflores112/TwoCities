import React from 'react';
import axios from 'axios';

import CityPicker from './cityPicker.jsx';
import CityScoresChart from './cityScoresChart.jsx';
import CityScoresOverallChart from './cityScoresOverallChart.jsx';

const temp = [{ name: 'Ankara', stats: [9.928, 9.125, 3.97, 0, 2.04, 5.29, 5.9, 7.4, 5.7, 2.02, 2.93, 4.09, 4.32, 2.31, 8.63, 4.48, 5.14] }];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: [], cityScores: temp };
    this.getCityScores = this.getCityScores.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }

  getCities() {
    axios.get('/scores')
      .then((res) => this.setState({ cities: res.data }))
      .catch((err) => console.log(err));
  }

  getCityScores(city) {
    axios.get(`/api/cities/${city}`)
      .then((res) => this.setState({ cityScores: [res.data] }))
      .catch((err) => console.log(err));
  }

  sortScores(val) {
    const { cities } = this.state;
    let temp;
    if (val === 'ascending') {
      cities.sort((a, b) => a.overall - b.overall);
    } else {
      cities.sort((a, b) => b.overall - a.overall);
    }
    this.setState({ cities });
  }

  render() {
    const { cities, cityScores } = this.state;
    return (
      <>
        <CityPicker cities={cities} getCityScores={this.getCityScores} />
        <CityScoresChart cityScores={cityScores} />
        <button type="button" onClick={() => this.sortScores('ascending')}>Ascending</button>
        <button type="button" onClick={() => this.sortScores('descending')}>Descending</button>
        <CityScoresOverallChart cities={cities} />
      </>
    );
  }
}

export default App;
