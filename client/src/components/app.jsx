import React from 'react';
import axios from 'axios';

import CityPicker from './cityPicker.jsx';
import CityScoresChart from './cityScoresChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: [] };
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    const { cities } = this.state;
    return (
      <>
        <CityPicker cities={cities} getCityScores={this.getCityScores} />
        <CityScoresChart />
      </>
    );
  }
}

export default App;
