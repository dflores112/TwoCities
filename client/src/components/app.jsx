import React from 'react';
import axios from 'axios';
import CityPicker from './cityPicker.jsx';
import CityScoresChart from './cityScoresChart.jsx';
import OverallScoresChart from './OverallScoresChart.jsx';
import CategoryTable from './CategoryTable.jsx';
import CostOfLivingChart from './CostOfLivingChart.jsx';
import Styles from './Styled.jsx';

const temp = [{ name: 'Belize', stats: [9.928, 9.125, 3.97, 0, 2.04, 5.29, 5.9, 7.4, 5.7, 2.02, 2.93, 4.09, 4.32, 2.31, 8.63, 4.48, 5.14] }];

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
      <>
        <Styles.Header> Three Cities</Styles.Header>
        <Styles.ContainerGrid>
          <Styles.Container>
            <CityPicker cities={cities} getCityScores={this.getCityScores} />
            <CityScoresChart cityScores={cityScores} />
          </Styles.Container>
          <Styles.Container>
            <CategoryTable cities={categories} sortCitiesByCategory={this.sortCitiesByCategory} />
          </Styles.Container>
          <Styles.Container>
            <Styles.ButtonWrap>
              <button type="button" onClick={() => this.sortScores('ascending')}>Ascending</button>
              <button type="button" onClick={() => this.sortScores('descending')}>Descending</button>
              <button type="button" onClick={() => this.sortScores('top')}>Top 50</button>
              <button type="button" onClick={() => this.sortScores('all')}>All Cities</button>
            </Styles.ButtonWrap>
            <OverallScoresChart cities={overall} />
          </Styles.Container>
          <Styles.Container>
            <CostOfLivingChart />
          </Styles.Container>
        </Styles.ContainerGrid>
      </>
    );
  }
}

export default App;
