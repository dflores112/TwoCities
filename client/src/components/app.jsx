import React from 'react';
import axios from 'axios';
import CityPicker from './cityPicker.jsx';
import CityScoresChart from './cityScoresChart.jsx';
import OverallScoresChart from './OverallScoresChart.jsx';
import CategoryTable from './CategoryTable.jsx';
import CostOfLivingChart from './CostOfLivingChart.jsx';
import Styles from './Styled.jsx';

const temp = [{ name: 'Berlin', stats: [9.928, 9.125, 3.97, 0, 2.04, 5.29, 5.9, 7.4, 5.7, 2.02, 2.93, 4.09, 4.32, 2.31, 8.63, 4.48, 5.14] }];
const temp2 = [
  {
    currency_dollar_value: 2.8,
    id: 'COST-APPLES',
    label: 'A kilogram of Apples',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 0.91,
    id: 'COST-BREAD',
    label: 'Bread',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 3.6,
    id: 'COST-CAPPUCCINO',
    label: 'A Cappuccino',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 11,
    id: 'COST-CINEMA',
    label: 'Movie ticket',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 41,
    id: 'COST-FITNESS-CLUB',
    label: 'Monthly fitness club membership',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 1.2,
    id: 'COST-IMPORT-BEER',
    label: 'A beer',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 100,
    id: 'COST-PUBLIC-TRANSPORT',
    label: 'Monthly public transport',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 10,
    id: 'COST-RESTAURANT-MEAL',
    label: 'Lunch',
    type: 'currency_dollar',
  },
  {
    currency_dollar_value: 13,
    id: 'COST-TAXI',
    label: '5km taxi ride',
    type: 'currency_dollar',
  },
  { name: 'Berlin' },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [], cityScores: temp, cityCount: 1, overall: [], categories: [], localPrices: temp2,
    };
    this.getCityScores = this.getCityScores.bind(this);
    this.sortCitiesByCategory = this.sortCitiesByCategory.bind(this);
    this.getLocalPrices = this.getLocalPrices.bind(this);
    this.removeCity = this.removeCity.bind(this);
    this.getCityRatings = this.getCityRatings.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }

  getCities() {
    axios.get('/api/scores')
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
      this.getCityRatings(city);
    }
    if (cityCount === 1) {
      this.setState({ cityCount: 2 });
      this.getCityRatings(city);
    }
  }

  getCityRatings(city) {
    const { cityScores } = this.state;
    axios.get(`/api/cities/${city}`)
      .then((res) => cityScores.push(res.data))
      .then(() => this.setState({ cityScores }))
      .catch((err) => console.log(err));
  }

  getLocalPrices(id) {
    axios.get(`/api/localPrices/${id}`)
      .then((res) => this.setState({ localPrices: res.data }))
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

  removeCity(i) {
    this.setState((prevState) => ({
      cityCount: prevState.cityCount - 1,
    }), () => {
      const { cityScores } = this.state;
      const newScores = [...cityScores];
      if (i === 0) {
        newScores.shift();
      } else {
        newScores.pop();
      }
      this.setState({ cityScores: newScores });
    });
  }

  render() {
    const {
      cities, cityScores, categories, overall, localPrices,
    } = this.state;
    return (
      <>
        <Styles.Header>
          {' '}
          <Styles.Image src="https://live.staticflickr.com/65535/51149263786_1fe794874b.jpg" alt="Italian Trulli" />
        </Styles.Header>
        <Styles.ContainerGrid>
          <Styles.Container>
            <CityPicker cities={cities} getCityScores={this.getCityScores} getLocalPrices={this.getLocalPrices} />
            <CityScoresChart cityScores={cityScores} removeCity={this.removeCity} />
          </Styles.Container>
          <Styles.Container>
            <CategoryTable cities={categories} sortCitiesByCategory={this.sortCitiesByCategory} />
          </Styles.Container>
          <Styles.Container>
            <Styles.OverallHeader> Overall City Scores</Styles.OverallHeader>
            <Styles.ButtonWrap>
              <Styles.Button type="button" onClick={() => this.sortScores('ascending')}>Ascending</Styles.Button>
              <Styles.Button type="button" onClick={() => this.sortScores('descending')}>Descending</Styles.Button>
              <Styles.Button type="button" onClick={() => this.sortScores('top')}>Top 50</Styles.Button>
              <Styles.Button type="button" onClick={() => this.sortScores('all')}>All Cities</Styles.Button>
            </Styles.ButtonWrap>
            <OverallScoresChart cities={overall} />
          </Styles.Container>
          <Styles.Container>
            <CostOfLivingChart localPrices={localPrices} />
          </Styles.Container>
        </Styles.ContainerGrid>
      </>
    );
  }
}
export default App;
