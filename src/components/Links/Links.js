import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="container">
        <div id="links" className="jumbotron">
          <h3><strong>Links to Area Services, Businesses and Events</strong></h3>
          <p className="lead">
      <a href="www.lakemonroeboatrental.com"><strong>Lake Monroe Boat Rental, Inc.</strong></a>
      </p>
      <p className="indent">
      Located in the Paynetown State Recreation Area, Monroe Reservoir.
812-837-9909 Open April through October! Early spring and late fall rentals too! Your call will be forwarded!
Double-Deckers, Pontoons, Ski Boats, Fishing Boats, Jet Skis, Canoes and Kayaks, Paddleboards, Paddleboats, Water Sport Accessories
and General Store!
          </p>
      <p className="lead">
      <strong>Lake Monroe Boat Storage, LLC</strong>
      </p>
      <p className="indent">
Secure storage in a fenced facility with 24-hour keyed access. Located just south of The Fishin Shedd
812-340-4768 or email for information:  info@thefishinshedd.com
      </p>
      <p className="lead">
        <a href="www.monroecrappiemasters.com"><strong>Monroe Crappie Masters</strong></a>
      </p>


        </div>
      </div>
    );
  }
}

export default Links;
