import React from 'react'
class ComparisionChart extends React.Component {
  constructor(props){
    super(props)
    this.state= {value: ''}


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.getCityStats(this.state.value)
  }




  render(){

    const {cities} = this.props
    let options = cities.map((city) =>[
      <option value={city}>{city}</option>
    ])

    return(


      <form onSubmit={this.handleSubmit}>
      <label>
        Pick your city:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="none">none</option>
          {options}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>

    )
  }
}

export default ComparisionChart
