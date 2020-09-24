import React, { Component } from 'react'
import './Navbar.css'

class CovidBar extends Component {
  constructor(props) {
    super(props)
    this.showDetails = this.showDetails.bind(this)
    this.state = { showCovidDetails: false }
  }
  showDetails() {
    this.setState({ showCovidDetails: !this.state.showCovidDetails })
  }
  render() {
    let showCovidDetails = this.state.showCovidDetails
    return (
      <div>
        <div className="covid-banner" onClick={this.showDetails}>
          <div>
            The Fishin Shedd is currently open, but hours are subject to change.
          </div>
          <div>Please call us at 812-837-9474 for more information</div>
        </div>
      </div>
    )
  }
}

export default CovidBar
