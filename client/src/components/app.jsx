import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CityPicker from './cityPicker.jsx';
import CityScoresChart from './cityScoresChart.jsx';
import CityScoresOverallChart from './cityScoresOverallChart.jsx';
import CategoryTable from './cityCategoryTable.jsx';

const temp = [{ name: 'Ankara', stats: [9.928, 9.125, 3.97, 0, 2.04, 5.29, 5.9, 7.4, 5.7, 2.02, 2.93, 4.09, 4.32, 2.31, 8.63, 4.48, 5.14] }];

const ChartWrap = styled.div`
margin: auto;
width: 80%;
height: 100px;
`;

const UpperWrap = styled.div`
display: grid;
grid-template-columns: 50% 50%;
width: 90%;
`;

const UpperWrapCenter = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const AppWrap = styled.div`
height: 100%;
`;

const ComponentsWrap = styled.div`
height: 75%;
`;
const ButtonWrap = styled.div`
display: flex;
justify-content: center;
padding: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [], cityScores: temp, cityCount: 0, overall: [], categories: [],
    };
    this.getCityScores = this.getCityScores.bind(this);
    this.sortCitiesByCategory = this.sortCitiesByCategory.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }

  getCities() {
    axios.get('/scores')
      .then((res) => this.setState({ cities: res.data, overall: [...res.data], categories: [...res.data] }))
      .catch((err) => console.log(err));
  }

  getCityScores(city) {
    const { cityScores, cityCount } = this.state;
    if (cityCount === 2) {
      alert('You may only compare two cities at a time.');
    }
    if (cityCount === 0) {
      cityScores.shift();
      this.setState({ cityCount: 1 });
    } else {
      this.setState({ cityCount: 2 });
    }
    axios.get(`/api/cities/${city}`)
      .then((res) => cityScores.push(res.data))
      .then(() => this.setState({ cityScores }))
      .catch((err) => console.log(err));
  }

  sortScores(val) {
    const { overall } = this.state;
    if (val === 'ascending') {
      overall.sort((a, b) => a.overall - b.overall);
      this.setState({ overall });
    } else if (val === 'descending') {
      overall.sort((a, b) => b.overall - a.overall);
      this.setState({ overall });
    } else if (val === 'top') {
      overall.sort((a, b) => b.overall - a.overall);
      const top = overall.slice(0, 50);
      this.setState({ overall: top });
    } else {
      this.getCities();
    }
  }

  sortCitiesByCategory(val) {
    const { categories } = this.state;
    categories.sort((a, b) => b[val] - a[val]);
    this.setState({ categories });
  }

  render() {
    const {
      cities, cityScores, categories, overall,
    } = this.state;
    return (
      <AppWrap>
        <h1> Two Cities</h1>
        <ComponentsWrap>
          <CityPicker cities={cities} getCityScores={this.getCityScores} />
          <UpperWrapCenter>
            <UpperWrap>
              <CityScoresChart cityScores={cityScores} />
              <CategoryTable cities={categories} sortCitiesByCategory={this.sortCitiesByCategory} />
            </UpperWrap>
          </UpperWrapCenter>
          <ChartWrap>
            <ButtonWrap>
              <div>Overall City Scores</div>
              <button type="button" onClick={() => this.sortScores('ascending')}>Ascending</button>
              <button type="button" onClick={() => this.sortScores('descending')}>Descending</button>
              <button type="button" onClick={() => this.sortScores('top')}>Top 50</button>
              <button type="button" onClick={() => this.sortScores('all')}>All Cities</button>
            </ButtonWrap>
            <CityScoresOverallChart cities={overall} />
          </ChartWrap>
        </ComponentsWrap>
      </AppWrap>
    );
  }
}

export default App;
