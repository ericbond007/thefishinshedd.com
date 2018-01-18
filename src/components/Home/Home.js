import React, { Component } from 'react';
import SEO from '../SEO';
import { Jumbotron, Grid } from 'react-bootstrap';

import Hours from './Hours';
import Location from './Location';
import './Home.css';

class Home extends Component {
  
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <SEO
          title="The Fishin Shedd"
          description="Located near Paynetown SRA, The Fishin Shedd is your choice for live bait, convenience items camping supplies, and ethanol-free gasoline. Open year round."
          path="/"
        />
      
        <Grid fluid className="homePage">
          <Jumbotron className="home">
            <h1 className="pageHeader animated slideInUp">Celebrating Our 50th Season!</h1>

            <Hours />
            
            <Location />

          </Jumbotron>
        </Grid>
      </div>

    );
  }
}

export default Home;
