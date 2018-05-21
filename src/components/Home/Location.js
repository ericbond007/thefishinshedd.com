import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';
import {  Col, Row, Well } from 'react-bootstrap';

const Location = (state) => (
      <div>
          <Row className="leftjust">
            <Col sm={4} className="location">
              <p>Come see us! Just 6 miles south of Bloomington</p>
                <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/The+Fishin+Shedd/@39.0944962,-86.4237921,15z/data=!4m5!3m4!1s0x0:0xc93bcd5938c701d9!8m2!3d39.0926281!4d-86.4224884" >
                  <ScrollAnimation animateIn="fadeInRight"  animateOnce offset={60} >
                    <LazyLoad height={200} once offset={150}>
                      <picture>
 <source
   media="(min-width: 601px)"
   className="boxedShadow mapImg img-responsive img-rounded"
   srcSet="img/sheddMap-md_1x.webp 1x, img/sheddMap-md_2x.webp 2x"
   type="image/webp" />
 <source
   className="boxedShadow mapImg img-responsive img-rounded"
   srcSet="img/sheddMap-sm_1x.webp 1x, img/sheddMap-sm_2x.webp 2x"
   type="image/webp" />
 <img
   className="boxedShadow mapImg img-responsive img-rounded"
   srcSet="img/sheddMap-sm_1x.jpg 600w"
   src="image_lg_1x.jpg"
   type="image/jpeg"
   alt="Map of The Fishin Shedd" />
  </picture>

                  </LazyLoad>
                  </ScrollAnimation>
                  <p>
                  4855 S State Road 446
                  Bloomington, IN
                  47401
                  </p>
                </a>

            </Col>
                
              <Col sm={8}>
                <Well className="wellDark">
									 <p>
 The Fishin Shedd is located on Indiana State Road 446,  6 miles southeast of Bloomington, IN. "The Shedd" is        directly across the street from the DNR Visitor's Center and the entrance to  Paynetown State Recreation Area. We    began our 50th year in business on April 1, 2017 and we are STILL...
									 </p>
									 <h2 className="center bigP">"All in the Family!"</h2>
                </Well>
            		<h3 className="center">Dick Shedd's Summer Weather Forecast</h3>
		            <p>
Alternating periods of sunshine and clouds. Rain at times. Dark at night. Brighter when sun is shining, Warmer       during the day.
		            </p>
              </Col>
          </Row>
      </div>
);

export default Location;
