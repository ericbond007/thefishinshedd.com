import React, { Component } from 'react'
import Media from 'react-media'
import MobileNavBar from './MobileNavBar'
import DesktopNavBar from './DesktopNavBar'
import './Navbar.css'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Media query="(min-width: 768px)">
          {(matches) => (matches ? <DesktopNavBar /> : <MobileNavBar />)}
        </Media>
      </div>
    )
  }
}

export default NavBar
