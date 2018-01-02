import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const Bait = () => (
      <div>
          <Row className="leftjust">
            <Col sm={8} smPush={4} className="fishinfo">
              <Well bsSize="small">
								<p className="leftjust">
The Fishin Shedd has a large selection of bait & tackle for every level fisherman. Bass and crappie      minnows are available year-round, as are giant nightcrawlers and beemoths. Our rotating live bait
    stock includes creek chubs, live crickets, shiners, and goldfish. Feel free to give us a call to find out what   we have in stock that day!
			          </p>
      			    <p className="leftjust">
Our tackle selection includes a vast array of bobbers, weights, hooks, jigs, hard & soft lures, and      more. We stock everything you might need to tackle Lake Monroe's toughest fishing spots. Stop in for a fishing      report; we are happy to give advice where we can. If you are new to fishing or just in a rush we also have pre-      strung poles for sale. One stop shopping for all your fishing needs.
			          </p>
             </Well>
						 <div className="lakeLevels" id="lldesktop">
				    	 <h2><a rel="noopener noreferrer" target="_blank" href="http://water.weather.gov/ahps2/hydrograph.php?gage=moni3&wfo=ind">Lake Monroe Water Levels</a></h2>
    						<p>
        Current Water Level: 536.5 ft
					      </p>
					      <p>
        Ideal Pool Level: 538 ft
      					</p>
						 </div>
            </Col>
                
            <Col sm={4} smPull={8}>
							<Image rounded responsive className="boxedShadow bobberSpinner" src="bobberSpinner-min.png" alt="Bobber Spinner" />
              	<div className="lakeLevels" id="llmobile">
							    <h2><a rel="noopener noreferrer" target="_blank" href="http://water.weather.gov/ahps2/hydrograph.php?gage=moni3&wfo=ind">Lake Monroe Water Levels</a></h2>
							    <p>
        Current Water Level: 537 ft
						      </p>
						      <p>
        Ideal Pool Level: 538 ft
						      </p>
							  </div>
            </Col>
          </Row>
      </div>
);

export default Bait;
