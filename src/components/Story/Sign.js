import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Sign = () => (
      <div>
          <Row>
            <Col sm={4} className="firstSign">
							<Image src="firstSign-min.png" responsive rounded className="boxedShadow" alt="The Fishin Shedd's First Sign" />
            </Col>
                
            <Col sm={8}>
							<Well bsSize="small" className="storyembedd">
<p className="lead">
Although Dick Shedd is no longer with us, the dream lives on. We are a family-owned business anchored in stories and tradition and the extended family have left their own footprints nearby with Lake Monroe Boat Rental, and Outback    Marine.
  </p>
  <p>
Be sure to stop by and help us celebrate our 50th year in business! Come see us where the minnow tanks still hum     year-round on the porch and there are pictures and stories to share, along with the products and services you need   to make your visit to our area complete.
</p>
<p id="centered">
With best wishes from all of us to you.
</p>


							</Well>
            </Col>
          </Row>
      </div>
);

export default Sign;
