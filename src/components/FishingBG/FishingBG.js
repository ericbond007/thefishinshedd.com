import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './FishingBG.css';

class FishingBG extends Component {
  render() {
    return (
      <div className="container-fluid fishingBG animated fadeInUp">
        <Image src="frontPorch-min.png" responsive alt="Minnow Tanks at The Shedd" />
      </div>
    );
  }
}

export default FishingBG;
