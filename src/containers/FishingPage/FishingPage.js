import React, { Component } from 'react';
import Fishing from '../../components/Fishing/Fishing';
import FishingBG from '../../components/FishingBG/FishingBG';

class FishingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <FishingBG />
      <Fishing />
      </div>
    );
  }
}

export default FishingPage;
