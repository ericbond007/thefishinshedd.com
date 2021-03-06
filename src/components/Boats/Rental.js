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
                   <p style={{textAlign: 'center', fontSize: '3rem' }}><a rel="noopener noreferrer" target="_blank" href="http://lakemonroeboatrental.com"><strong>Lake Monroe Boat Rental</strong></a> </p>
  <p>
  Looking to get out on the water but don’t want to commit to the cost of owning your own boat? Lake Monroe Boat Rental has you covered!
  </p>
  <div>
  <ul className="infoList list-unstyled">
    <li>812-837-9909</li>
     <li>Pontoons</li>
  <li> Double decker pontoons</li>
  <li> Ski boats</li>
  <li> Jet skis</li>
  <li> Fishing boats</li>
  <li> Canoes</li>
  <li> Kayaks</li>
  <li> SUP’s (stand up paddleboards)</li>
  <li> Boating accessories </li>
  <li> Sno cones</li>
  </ul>
  </div>
 
  
							</Well>

            </Col>
          </Row>
      </div>
);

export default Rental;
