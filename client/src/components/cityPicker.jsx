import React from 'react';
import Styles from './Styled.jsx';

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
    const { getCityScores, getLocalPrices } = this.props;
    const { id } = this.state;
    if (id === '') {
      throw alert('Select a City');
    }
    getCityScores(id);
    getLocalPrices(id);
  }

  render() {
    const { cities } = this.props;
    const { id } = this.state;
    const options = cities.map((city) => [
      <option value={city._id} key={Math.random()}>{city.name}</option>,
    ]);

    return (
      <Styles.Form onSubmit={this.handleSubmit}>
        Pick your city:
        <Styles.Select value={id} onChange={this.handleChange}>
          <option value="none">Choose Below</option>
          {options}
        </Styles.Select>
        <Styles.Submit type="submit" value="Submit" />
      </Styles.Form>
    );
  }
}

export default CityPicker;
