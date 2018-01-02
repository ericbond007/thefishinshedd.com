import React, { Component } from 'react';
import Story from '../../components/Story/Story';

class StoryPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <Story />
      </div>
    );
  }
}

export default StoryPage;
