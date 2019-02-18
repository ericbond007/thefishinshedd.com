import React from 'react';
import DeliMenu from './DeliMenu';
import {  Col, Row, Well, Image, Thumbnail } from 'react-bootstrap';

const Menu = () => (
      <div>
          <Row className="leftjust">
            <Col sm={8} smPush={4}>
              <Well bsSize="small">
								 <p>
Come in and try a hand-made sandwich from The Fishin Shedd! We have an ever expanding deli menu  and have fresh, hot sandwiches ready for you on a daily basis. Want something quick? Grab a pre-made bite from our   cooler; we are happy to add toppings upon request!
                 </p>
								<DeliMenu />
             </Well>
							<div id="tabledesktop">
            	  <p className="outdoor">
Outdoor seating available! Grab a sandwich or biscuits and gravy on the    weekend and enjoy the great outdoors at The Fishin Shedd!
								</p>
                <Image src="table-min.png" responsive rounded className="boxedShadow picnic" alt="Picnic Table" />
              </div>
            </Col>
                
            <Col sm={4} smPull={8}>
							<Image src="grabCooler-min.png" responsive rounded className="boxedShadow grabCooler" alt="Grab n Go Cooler"/>
							
							<Thumbnail src="deliCuban-min.png"  alt="The Cuban">
								<h3 className="sheddSpecial">Shedd Special: The Cuban</h3>
									<p>
Ham, Pulled Pork, Swiss, Dill Pickle Slice, and Dijon Mustard Atop a Toasted White Roll. Now  Available at The Fishin Shedd Deli
                  </p>
							</Thumbnail>
							<div id="tablemobile">
              	<p>
Outdoor seating available! Grab a sandwich or biscuits and gravy on the weekend and enjoy the   great outdoors at The Fishin Shedd!
								</p>
                <Image src="table-min.png" responsive rounded className="boxedShadow picnic" alt="Picnic Table" />
               </div>


            </Col>
          </Row>
      </div>
);

export default Menu;
