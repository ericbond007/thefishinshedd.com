import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Rental = () => (
      <div>
          <Row>
            <Col sm={4} className="comingSoon">
							<Image src="lmbrLogo.jpg" responsive rounded className="animated fadeInLeft          boxedShadow" alt="Lake Monroe Boat Rental" />
            </Col>
                
            <Col sm={8}>
							<Well bsSize="small" className="boatsembedd">
								 <p>
                   Check out <a rel="noopener noreferrer" target="_blank" href="http://lakemonroeboatrental.com">Lake Monroe Boat Rental</a> for all your boating needs. Big double deckers, single deck pontoons, ski boats, jet skis, and more are all available for rent! Visit their <a rel="noopener noreferrer" target="_blank" href="http://lakemonroeboatrental.com">website</a> for more info.
                 </p>
                 <p>
                    Need a place to store your boat or RV camper? We now have spots available for rent at the Lake Monroe Boat Storage facility. We also offer full boat winterization and shrink wrapping.
                  </p>
                  <p>
                    Call 812-340-4768 for more boat storage infomation
                  </p>
							</Well>

            </Col>
          </Row>
      </div>
);

export default Rental;
