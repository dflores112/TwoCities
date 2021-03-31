import React from 'react';
import styled from 'styled-components';

const CategoryWrap = styled.div`
width: 80%;
`;
const Form = styled.form`
top: -10%;
position:relative;
`;

const CityName = styled.div`
padding:7px;
`

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
      <CityName key={Math.random()}>
        {i + 1}
        .
        {' '}
        {city.name}
      </CityName>
    ));
    return (
      <CategoryWrap>
        <Form onSubmit={this.handleSubmit}>
          Top Cities By Category:
          <select onChange={this.handleChange}>
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
          </select>
          <input type="submit" value="Submit" />
          {list || null}
        </Form>
      </CategoryWrap>
    );
  }
}

export default CategoryTable;
