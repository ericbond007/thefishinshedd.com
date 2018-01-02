import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
      <Grid fluid className="header text-center">
        <Row>
          <Col sm={8} smOffset={2}>
            <Image src="sheddHeader-min.png" responsive className="headerLarge" alt="The Fishin Shedd" />
 
            <Image src="sheddHeaderSmall-min.png" responsive className="headerSmall" alt="The Fishin Shedd" />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Header;
