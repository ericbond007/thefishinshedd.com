import React, { Component } from 'react';
import Deli from '../../components/Deli/Deli';
import DeliBG from '../../components/DeliBG/DeliBG';

class DeliPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <DeliBG />
      <Deli />
      </div>
    );
  }
}

export default DeliPage;
