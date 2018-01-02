import React, { Component } from 'react';
import Products from '../../components/Products/Products';
import ProductsBG from '../../components/ProductsBG/ProductsBG';

class ProductsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <ProductsBG />
      <Products />
      </div>
    );
  }
}

export default ProductsPage;
