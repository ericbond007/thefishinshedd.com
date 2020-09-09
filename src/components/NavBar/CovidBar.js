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
          <div>The Shedd is temporarly closed due to COVID-19.</div>
          <div>Click here to see more details...</div>
          {showCovidDetails && (
            <div className="covid-banner-details">
              <div>
                Due to a positive COVID-19 test by one of our employees, we will
                unfortunately have to remain closed until all of our staff has
                been tested and quarantined. We apologize for any inconvenience
                and thank you for your understanding.
              </div>
              <div>
                We plan to reopen on Monday, Sept 21 once all of our staff have
                tested negative. We will let you know as soon as we are open for
                business!
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CovidBar
