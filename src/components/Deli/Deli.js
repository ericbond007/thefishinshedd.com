import React, { Component } from 'react';
import Menu from './Menu';
import Cookies from './Cookies';
import { Grid, Jumbotron } from 'react-bootstrap';

import SEO from '../SEO';
import './Deli.css';

class Deli extends Component {
  render() {
    return (
      <div>
      <SEO
        title="Deli | The Fishin Shedd"
        description="Check out The Fishin Shedd Deli"
        path="/deli"
      />

      <Grid fluid className="deliPage">
        <Jumbotron className="deli">

          <h1 className="pageHeader animated slideInUp">The Fishin Shedd Deli</h1>

          <Menu />
          <Cookies />


      
        </Jumbotron>
      </Grid>
    </div>
    );
  }
}

export default Deli;
