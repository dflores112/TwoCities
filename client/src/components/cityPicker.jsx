import axios from 'axios';
import React from 'react';
import Styles from './Styled.jsx';

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLocalPrices = this.getLocalPrices.bind(this);
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getCityScores } = this.props;
    const { id } = this.state;
    getCityScores(id);
    this.getLocalPrices(id);
  }

  getLocalPrices(id) {
    axios.get(`/api/localPrices/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
