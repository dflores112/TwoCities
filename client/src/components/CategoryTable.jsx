import React from 'react';
import Styles from './Styled.jsx';

class CategoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: 'education' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { sortCitiesByCategory } = this.props;
    const { category } = this.state;
    sortCitiesByCategory(category);
  }

  render() {
    const { cities } = this.props;
    const list = cities.slice(0, 10).map((city, i) => (
      <Styles.CityName key={Math.random()}>
        {i + 1}
        .
        {' '}
        {city.name}
      </Styles.CityName>
    ));
    return (
      <Styles.Form onSubmit={this.handleSubmit}>
        Top Cities By Category:
        <Styles.Select onChange={this.handleChange}>
          <option value="education"> Education </option>
          <option value="businessFreedom"> Business Freedom </option>
          <option value="commute"> Commute </option>
          <option value="costOfLiving"> Cost of Living </option>
          <option value="economy"> Economy </option>
          <option value="enviromentalQuality"> Enviromental Quality </option>
          <option value="healthcare"> Healthcare </option>
          <option value="housing"> Housing </option>
          <option value="internetAccess"> Internet Access </option>
          <option value="leisureAndCulture"> Leisure and Culture </option>
          <option value="outdoors"> Outdoors </option>
          <option value="safety"> Safety </option>
          <option value="startups"> Startups </option>
          <option value="taxation"> Taxation </option>
          <option value="tolerance"> Tolerance </option>
          <option value="travelConnectivity"> Travel Connectivity </option>
          <option value="ventureCapital"> Venture Capital</option>
        </Styles.Select>
        <Styles.Submit type="submit" value="Submit" />
        {list || null}
      </Styles.Form>
    );
  }
}

export default CategoryTable;
