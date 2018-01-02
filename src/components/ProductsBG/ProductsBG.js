import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './ProductsBG.css';

class ProductsBG extends Component {
  render() {
    return (
      <div className="container-fluid productsBG animated fadeInUp">
        <Image src="southPano-min.png" responsive alt="The Fishin Shedd" />
      </div>
    );
  }
}

export default ProductsBG;
