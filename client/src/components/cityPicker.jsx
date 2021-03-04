import React from 'react';

import styled from 'styled-components'

const Wrap = styled.form`
position: relative;
left: 10%;
`;

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getCityScores } = this.props;
    const { id } = this.state;
    getCityScores(id);
  }

  render() {
    const { cities } = this.props;
    const { id } = this.state;
    const options = cities.map((city) => [
      <option value={city._id} key={Math.random()}>{city.name}</option>,
    ]);

    return (
      <Wrap onSubmit={this.handleSubmit}>
        Pick your city:
        <select value={id} onChange={this.handleChange}>
          <option value="none">none</option>
          {options}
        </select>
        <input type="submit" value="Submit" />
      </Wrap>
    );
  }
}

export default CityPicker;
