import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './HomeBG.css';

class HomeBG extends Component {
  render() {
    return (
      <div className="container-fluid homeBG animated fadeInUp">
        <Image src="sheddFrontPano-min.png" responsive alt="The Fishin Shedd"/>
      </div>
    );
  }
}

export default HomeBG;
