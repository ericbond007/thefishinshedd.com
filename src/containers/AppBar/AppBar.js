import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';


class AppBar extends Component {
  render() {
    return (
      <div>
      <Header />
      <NavBar />
      </div>
    );
  }
}

export default AppBar;
