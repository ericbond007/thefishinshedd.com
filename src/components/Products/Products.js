import React, { Component } from 'react';
import SEO from '../SEO';
import { Jumbotron, Grid } from 'react-bootstrap';
import List from './List';
import Beer from './Beer';
import './Products.css';

class Products extends Component {

  ComponentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <SEO
          title="Products & Services | The Fishin Shedd"
          description="Here at The Shedd, we have a little bit of everything"
          path="/products"
        />

      <Grid fluid className="productsPage">
        <Jumbotron className="products">
        <h1 className="pageHeader animated slideInUp">At Lake Monroe Since 1968</h1>
        
        <List />
        <Beer />

  </Jumbotron>
      </Grid>
    </div>

    );
  }
}

export default Products;
