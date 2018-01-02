import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './DeliBG.css';

class DeliBG extends Component {
  render() {
    return (
      <div className="container-fluid deliBG animated fadeInUp">
        <Image src="deliShot-min.png" responsive alt="Fishin Shedd Deli" />
      </div>
    );
  }
}

export default DeliBG;
