import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import HomeBG from '../../components/HomeBG/HomeBG';

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <HomeBG />
        <Home />
      </div>
    );
  }
}

export default HomePage;
