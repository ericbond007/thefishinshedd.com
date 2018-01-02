import React, { Component } from 'react';
import Boats from '../../components/Boats/Boats';

class BoatsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <Boats />
      </div>
    );
  }
}

export default BoatsPage;
