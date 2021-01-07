import React from 'react';
import axios from 'axios'

import ComparisionChart from './comparisionChart.jsx'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={cities: []}
    this.getCityStats = this.getCityStats.bind(this)

  }



  componentDidMount() {
    this.getCityNames()
  }

  getCityNames() {
    axios.get('/cities')
      .then(res => this.setState({cities: res.data}))
      .catch(err => console.log(err))
  }

  getCityStats(city){
    let lowercase = city.toLowerCase()
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${lowercase}/scores`)
    .then(res => console.log(res.data.categories))
    .catch(err => console.log(err))
  }


  render() {
    return (
      <ComparisionChart cities={this.state.cities} getCityStats={this.getCityStats}/>
    )
  }
}

export default App