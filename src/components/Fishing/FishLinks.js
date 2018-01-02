import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const FishLinks = () => (
      <div>
          <Row className="leftjust">
            <Col sm={8} smPush={4} className="centeredcol">
              <Well>
<h3 className="centered"> Local Fishing and Hunting Guide Services</h3>
          <ul>
            <li>Gary Van Pelt (Fishing--Strictly Monroe Reservoir)</li>
            <ul className="fishingLinks"><li><a href="tel:+1-812-336-1957">Phone:  812-336-1957</a></li></ul>
            <li>J&R Guide Service (Fishing Patoka and Monroe Reservoirs, Deer and Turkey Hunting) </li>
            <ul className="fishingLinks"><li><a href="tel:+1-812-797-9904">Phone: 812-797-9904</a></li><li><a        rel="noopener noreferrer" target="_blank" href="http://patokaguides.com">patokaguides.com</a></li></ul>

            <li>Tom Todd (Fishing Patoka and Monroe Reservoirs and the White River) </li>
            <ul className="fishingLinks"><li><a href="tel:+1-812-508-9989">Phone: 812-508-9989</a></li><li><a        rel="noopener noreferrer" target="_blank" href="http://tomsguideservice.com">tomsguideservice.com</a></li></ul>
          </ul>

          <ul>
    <li>Looking for a Deer Processor?</li>
            <li>Contact KW Custom Deer Processing</li>
            <ul><li><a href="tel:+1-812-824-2492">Phone: 812-824-2492</a></li><li><a rel="noopener noreferrer"       target="_blank" href="http://kwdeerprocessing.com">kwdeerprocessing.com</a></li></ul>
  </ul>

             </Well>
            </Col>
                
            <Col sm={4} smPull={8}>
							<ScrollAnimation animateIn="bounceInUp" offset={60} animateOnce>
			          <Image src="summerNicky-min.png" circle responsive className="boxedShadow nicky"           alt="Little Nicky" />
			        </ScrollAnimation>


            </Col>
          </Row>
      </div>
);

export default FishLinks;
