import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AutoAffix } from 'react-overlays'
import CovidBar from './CovidBar'
import './Navbar.css'

class DesktopNavBar extends Component {
  render() {
    return (
      <div className="nav-wrapper affix">
        <AutoAffix offsetTop={50} affixClassName="affix">
          <div id="desktopNav">
            <nav className="navbar navbar-default navbar-static-top affix">
              <CovidBar />
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#sheddBar"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="collapse navbar-collapse navbar-mobile"
                  id="sheddBar"
                >
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/">
                        <div data-toggle="collapse" data-target="#sheddBar">
                          Home
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products">
                        <div data-toggle="collapse" data-target="#sheddBar">
                          Products & Services
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/deli">
                        <div data-toggle="collapse" data-target="#sheddBar">
                          Deli
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/fishing">
                        <div data-toggle="collapse" data-target="#sheddBar">
                          Fishing & Hunting
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/boats">
                        <div data-toggle="collapse" data-target="#sheddBar">
                          Boat Rental & Storage
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/story">
                        <div data-toggle="collapse" data-target="#sheddBar">
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

export default DesktopNavBar
