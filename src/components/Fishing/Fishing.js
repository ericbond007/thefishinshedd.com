import React, { Component } from 'react';
import SEO from '../SEO';
import { Grid, Jumbotron } from 'react-bootstrap';
import Bait from './Bait';
import FishLinks from './FishLinks';
import Licensce from './Licensce';
import './Fishing.css';

class Fishing extends Component {

  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <SEO
          title="Fishing & Hunting | The Fishin Shedd"
          description="Local Fishing & Hunting information"
          path="/fishing"
        />

      <Grid fluid className="fishingPage">
        <Jumbotron  className="fishing">
          <h1 className="pageHeader animated slideInUp">Last Stop For Live Bait!</h1>
        
          <Bait />
          <FishLinks />
          <Licensce />

        </Jumbotron>
      </Grid>
    </div>
    );
  }
}

export default Fishing;
