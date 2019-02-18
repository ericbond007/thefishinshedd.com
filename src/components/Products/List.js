import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const List = () => (
      <div>
          <Row className="leftjust">
            <Col sm={8} smPush={4}>
              <Well bsSize="small">
                <p>
            The Fishin Shedd carries a large selection of convenience & camping items for all your outdoor needs.    Cold drinks, carry-out deli food, and more are all available at The Shedd!
          			</p>
			          <h3 className="centerH">Items for sale at The Shedd:</h3>
      			      <ul className="listUnstyled conv">
            			  <li>Live Bait & Tackle</li>
			              <li>Groceries</li>
      			        <li>Beer & Wine</li>
            			  <li>Propane Exchange</li>
			              <li>Firewood & Ice</li>
      			        <li>Boating and Camping Supplies</li>
            			  <li>Fishin Shedd Apparel</li>
			              <li>Carry-Out Deli</li>
      			        <li>Ski Tubes & Life Jackets</li>
            			  <li>ATM & Hoosier Lotto</li>
			            </ul>
      					<div className="leftjust">
						      <p>
Our gas pumps feature ethanol-free gasoline year round. Even our diesel is ethanol-free. Stop by and  fill up your boat or motorcycle with our high-quality gasoline. Small engines do well with ethanol-free fuel,  too.       Cleaner burning than regular gas, ethanol-free fuel is the outdoorsman's choice for engine longevity.				
									</p>
					        <p>
The Shedd sells a variety of bait & tackle, too. Everything from hooks and sinkers to pre-strung fishing  poles ready to go. Our in-house tackle master stays up to date with the latest fishing gear and tackle to satisfy    your fishing needs.  
									</p>
                  <p>
                    Boat accessories include pull behind tubes, ski ropes, life jackets, and boat ladders. We have a little bit of everything so stop by to check out what's in stock or give us a call!
                  </p>
                </div>
             </Well>
            </Col>
                
            <Col sm={4} smPull={8}>
							<Image src="sheddInside-min.png" responsive rounded className="boxedShadow emmaReg" alt="Inside The Shedd" />

            </Col>
          </Row>
      </div>
);

export default List;
