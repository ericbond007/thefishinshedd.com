import React from 'react';
import {  Col, Row, Well, Image } from 'react-bootstrap';

const List = () => (
      <div>
          <Row className="leftjust">
            <Col sm={8} smPush={4}>
              <Well bsSize="small">
								<p>
We carry a great selection of local craft and regional beers. Local breweries include Bloomington   Brewing Company, Upland Brewery, and Big Woods Brewery. We stock a mix of hard hitting IPAs to great all-day beers.  And of course classics like Budweiser and Miller Lite. Also in stock are great wines from local Brown County Winery.
              	</p>
								<p>
Our inventory is always changing so stop by and see what's new!
              	</p>
             </Well>
            </Col>
                
            <Col sm={4} smPull={8}>
							<Image src="beerSelection-min.png" responsive rounded className="boxedShadow             beerSelection" alt="Beer Selection" />
            </Col>
          </Row>
      </div>
);

export default List;
