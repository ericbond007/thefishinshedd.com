import React, { Component } from 'react';
import Rental from './Rental';
import Storage from './Storage';
import { Jumbotron, Grid } from 'react-bootstrap';
import SEO from '../SEO';
import './Boats.css';

class Boats extends Component {
  render() {
    return (
      <div>
        <SEO
          title="Boat Rental & Storage | The Fishin Shedd"
          description="Info on Lake Monroe Boat Rental and Storage"
          path="/boats"
        />

      <Grid fluid className="boatsPage">
      <Jumbotron className="boats">
        <h1 className="display-3 pageHeader">Lake Monroe Boat Rental & Storage</h1>
          <Rental />
      <Storage />
      </Jumbotron>
      </Grid>
</div>
    );
  }
}

export default Boats;
