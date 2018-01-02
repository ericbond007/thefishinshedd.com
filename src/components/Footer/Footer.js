import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer container-fluid">
        <div className="rowBehave">
          <ul className="footUl">
            <li><p>Call Us! <a href="tel:+1-812-837-9474" aria-label="1-812-837-9474">812-837-9474</a></p></li>
            <li><p><a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/The+Fishin+Shedd/@39. 0944962,-86.4237921,15z/data=!4m5!3m4!1s0x0:0xc93bcd5938c701d9!8m2!3d39.0926281!4d-86.4224884" >4855 S State Road 446 Bloomingtion, IN 47401</a></p></li>

          <li><p><a href="mailto:info@thefishinshedd.com">Email Us Too! info@thefishinshedd.com</a></p></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://urlgeni.us/facebook/GTOU"><i className="fa fa-facebook-square" aria-label="https://urlgeni.us/facebook/GTOU"></i></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://urlgeni.us/instagram/DF37"><i className="fa fa-instagram" aria-label="https://urlgeni.us/instagram/DF37"></i> </a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://urlgeni.us/snapchat/MzDm"><i className="fa fa-snapchat" aria-label="https://urlgeni.us/snapchat/MzDm"></i> </a></li>
            <li><p>&copy; 2018 The Fishin Shedd</p></li>
          </ul>
      </div>
      <div className="version">
        version 1.0.0
      </div>
      </div>
    );
  }
}

export default Footer;
