import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
  render() {
  const isActive = this.context.router.isActive(this.props.to, true),
      className = isActive ? "active" : "";
    return (
     <li className={className}><Link {...this.props} activeClassName="active" /></li>
    );
  }
}

export default NavLink;
