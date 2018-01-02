import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const June = () => (
      <div>
          <Row>
            <Col sm={4} className="comingSoon">
							<Image src="comingSoon-min.png" responsive rounded className="animated fadeInLeft          boxedShadow" alt="The Fishin Shedd: Coming Soon" />
            </Col>
                
            <Col sm={8}>
							<Well bsSize="small" className="storyembedd">
								 <p className="lead">

        Back in June, 1967, Dick and Barb Shedd--with two kids in tow and one on the way--made a down payment on an  acre of land across the street from the entrance to Paynetown State Recreation Area at Lake Monroe--a busy           destination for visitors to Indiana's newest (and still largest) lake.
            </p>
            <p>
Dick and Barb sold their insurance agency in Indianapolis that summer and Dick headed south in his Jeep--pulling a   camper--to clear the land and oversee construction of "The Fishin Shedd." The dream was to own their own business--  and we think Dick and Barb might have gotten a little more than they bargained for.
            </p>
            <p>
  For a number of years, when Monroe was seen primarily as a fishing destination, we opened before dawn, closed long after dark and were open 24 hours a day over the weekend. Back then, night crawlers arrived from Curtis Fisheries in Martinsville, Indiana in 500-count pallets--and it was up to the family and staff to get them counted and packaged.  Now, as we head into our 50th year, a lot of things have changed--the way we pack crawlers, the products and         services we offer, and the reasons why people come to Lake Monroe!
            </p>
            <p>
      What hasn't changed in all of these years is our commitment to you, our customer.
            </p>
							</Well>

            </Col>
          </Row>
      </div>
);

export default June;
