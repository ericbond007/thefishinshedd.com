import React, { Component } from 'react';
import Links from '../../components/Links/Links';

class LinksPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <Links />
      </div>
    );
  }
}

export default LinksPage;
