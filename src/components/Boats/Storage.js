import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Storage = () => (
      <div>
          <Row>
            <Col sm={4} className="comingSoon marineCont">
							<Image src="marine-min.png" responsive rounded className="marineSign boxedShadow" alt="446 Marine" />
            </Col>
                
            <Col sm={8}>
							<Well bsSize="small" className="boatsembedd">
                   <p style={{textAlign: 'center', fontSize: '3rem' }}><strong>Boat Storage</strong></p>
  <p>
  Need a place to store your boat or RV camper? We offer indoor and outdoor parking at two of our sister companies, Lake Monroe Boat Storage and 446 Marine.
  </p>
  <div>
  <p><strong>Lake Monroe Boat Storage</strong></p>
  <ul className="infoList list-unstyled">
     <li>812-340-4768</li>
  <li>Indoor parking</li>
  <li>Lean-to parking</li>
  <li>Outdoor parking</li>
  <li>Shrink wrapping</li>
  <li>Motor winterization/summerization</li>
  <li>24 hour access/self parking</li>
  <li>Boat launch/retrieval service</li>
  </ul>
  </div>

  <div>
  <p><strong>446 Marine</strong></p>
  <ul className="infoList list-unstyled">
     <li>812-837-9128</li>
  <li>Indoor parking</li>
  <li>Outdoor parking</li>
  <li>Service/repair garage</li>
  <li>Shrink wrapping</li>
  <li>Motor winterization/summerization</li>
  <li>7 day access/employee parking</li>
  <li>Boat launch/retrieval service</li>
  </ul>
  </div>

							</Well>
            </Col>
          </Row>
      </div>
);

export default Storage;
