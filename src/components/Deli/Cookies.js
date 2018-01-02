import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Cookies = () => (
      <div>
          <Row className="leftjust">
            <Col sm={4}>
							<Image src="emmaCookies-min.png" rounded responsive className="boxedShadow emma" alt="Emma's Cookies" />
            </Col>
            <Col sm={8}>
							<Well className="cookies">
								<h2>Cookies by Emma!</h2>
									<p>
Stop in and say hi to Emma and try one of her amazing homemade cookies! Made right here in The Shedd, Emma makes each batch from scratch with plenty of love and care. We are always baking new batches of cookies; if you're lucky you can catch them fresh out of the oven!
			            </p>
							</Well>
            </Col>
          </Row>
      </div>
);

export default Cookies;
