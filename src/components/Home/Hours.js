import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import {  Col, Row, Well } from 'react-bootstrap';

const Hours = () => (
      <div>
          <Row className="leftjust">
            <Col sm={4}>
              <LazyLoad height={200} once offset={150}>
               <picture>
 <source
   media="(min-width: 601px)"
   className="boxedShadow logo img-responsive img-rounded"
   srcSet="img/sheddLogo-md_1x.webp 1x, img/sheddLogo-md_2x.webp 2x"
   type="image/webp" />
 <source
   className="boxedShadow logo img-responsive img-rounded"
   srcSet="img/sheddLogo-sm_1x.webp 1x, img/sheddLogo-sm_2x.webp 2x"
   type="image/webp" />
 <img
   className="boxedShadow logo img-responsive img-rounded"
   srcSet="img/sheddLogo-sm_1x.jpg 600w"
   src="image_lg_1x.jpg"
   type="image/jpeg"
   alt="The Fishin Shedd" />
  </picture>
  </LazyLoad>

                <div className="centered">
                  <h3 className="billHeader">The Fishin Shedd  is open year round!</h3>
                    <p className="hours">Fall Hours:</p>
                    <p className="hours">Sunday - Thursday: 6AM - 6:30PM</p>
                    <p className="hours">Friday & Saturday: 6AM - 7:30PM</p>

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
