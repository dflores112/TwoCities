import React from 'react';
import axios from 'axios';

import ComparisionChart from './comparisionChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: [], selected: '' };
    this.getCityStats = this.getCityStats.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }

  getCities() {
    axios.get('/scores')
      .then((res) => this.setState({ cities: res.data }))
      .catch((err) => console.log(err));
  }

  getCityStats(city) {
  }

  render() {
    return (
      <ComparisionChart cities={this.state.cities} getCityStats={this.getCityStats} scores={this.state.selected} />
    );
  }
}

export default App;
