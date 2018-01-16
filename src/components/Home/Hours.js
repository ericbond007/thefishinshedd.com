import React from 'react';
import { Link } from 'react-router-dom';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Hours = () => (
      <div>
          <Row className="leftjust">
            <Col sm={4}>
              <Image src="sheddLogo-min.png" responsive rounded className="boxedShadow logo" alt="The Fishin Shedd Logo"/>
                <div className="centered">
                  <h3 className="billHeader">The Fishin Shedd  is open year round!</h3>
                    <p className="hours">Winter Hours:</p>
                    <p className="hours">Sunday - Thursday: 6AM - 6:30PM</p>
                    <p className="hours">Friday & Saturday: 6AM - 7:00PM or later!!</p>
                    <p className="hours">Call us for more info: <a href="tel:+1-812-837-9474">812-837-9474</a></p>
                </div>
              </Col>
                
              <Col sm={8}>
                <Well>
                  <h2 className="wellHeader"><Link to="/products">Convenience & More</Link></h2>
                    <p>
                  The Fishin Shedd is your home for all things bait & tackle at Lake Monroe. We carry a large        variety of camping and fishing gear for all your outdoor adventures. Here at The Shedd we have a little bit of       everything. Grocery items, ice, firewood, beer & wine and much more!
                    </p>
                  <h2 className="wellHeader"><Link to="/deli">The Fishin Shedd Deli</Link></h2>
                    <p>
       Come see our recently expanded deli selection! We have grab n' go sandwiches for a quick bite, or we can hand make any number of items from our menu. Don't be shy, special requests are encouraged! Come in on Friday thru Sunday for hot breakfast: Rick's special biscuits and sausage gravy, breakfast burritos, and more!
                    </p>
                  <h2 className="wellHeader"><Link to="/fishing">Fresh Live Bait - Year Round!</Link></h2>
                    <p>
        The closest bait shop to Lake Monroe and one of the only left in Monroe County, The Fishin Shedd is your     best bet for the liveliest bait fish in town! Always in stock are bass and crappie minnows, giant Canadian           nightcrawlers and beemoths.
                    </p>
                </Well>
              </Col>
          </Row>
      </div>
);

export default Hours;
