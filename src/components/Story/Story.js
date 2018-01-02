import React, { Component } from 'react';
import June from './June';
import Sign from './Sign';
import { Jumbotron, Grid } from 'react-bootstrap';
import SEO from '../SEO';
import './Story.css';

class Story extends Component {
  render() {
    return (
      <div>
        <SEO
          title="Our Story | The Fishin Shedd"
          description="On Lake Monroe for 50 years, The Fishin Shedd is a Bloomingtion, IN tradition"
          path="/story"
        />

      <Grid fluid className="storyPage">
      <Jumbotron className="story">
        <h1 className="display-3 pageHeader">50 Years at Lake Monroe</h1>
          
          <June />
          <Sign />
      </Jumbotron>
      </Grid>
</div>
    );
  }
}

export default Story;
