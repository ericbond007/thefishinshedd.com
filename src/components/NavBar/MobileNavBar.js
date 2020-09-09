import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AutoAffix } from 'react-overlays'
import CovidBar from './CovidBar'
import './Navbar.css'

class MobileNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = { condition: false }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState((prevState) => ({
      condition: !prevState.condition,
    }))
  }

  render() {
    return (
      <div className="nav-wrapper">
        <AutoAffix offsetTop={50} affixClassName="affix">
          <div id="mobileNav" className="keepLogoHidden">
            <nav className="navbar navbar-default navbar-static-top">
              <CovidBar />
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#sheddBar"
                    onClick={this.toggleNav}
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <div id="navBrandText">
                    <a id="sheddNavText" className="navbar-brand" href="/">
                      <img
                        className="sheddNavimg"
                        src="sheddNavbar-min.png"
                        alt="The Fishin Shedd"
                      />
                    </a>
                  </div>
                </div>

                <div
                  id="sheddBar"
                  className={
                    this.state.condition
                      ? 'mobileHidden collapse navbar-collapse navbar-mobile'
                      : 'collapse navbar-collapse navbar-mobile'
                  }
                >
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/">
                        <div
                          data-toggle="collapse"
                          data-target="#sheddBar"
                          onClick={this.toggleNav}
                        >
                          Home
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products">
                        <div
                          data-toggle="collapse"
                          data-target="#sheddBar"
                          onClick={this.toggleNav}
                        >
                          Products & Services
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/deli">
                        <div
                          data-toggle="collapse"
                          data-target="#sheddBar"
                          onClick={this.toggleNav}
                        >
                          Deli
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/fishing">
                        <div
                          data-toggle="collapse"
                          data-target="#sheddBar"
                          onClick={this.toggleNav}
                        >
                          Fishing & Hunting
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/boats">
                        <div
                          data-toggle="collapse"
                          data-target="#sheddBar"
                          onClick={this.toggleNav}
                        >
                          Boat Rental & Storage
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/story">
                        <div
                          data-toggle="collapse"
                          data-target="#sheddBar"
                          onClick={this.toggleNav}
                        >
                          Our Story
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </AutoAffix>
      </div>
    )
  }
}

export default MobileNavBar
