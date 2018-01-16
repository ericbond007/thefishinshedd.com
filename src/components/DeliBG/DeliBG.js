import React, { Component } from 'react';
import './DeliBG.css';

class DeliBG extends Component {
  render() {
    return (
      <div className="container-fluid deliBG animated fadeInUp">
<picture>
 <source
   media="(min-width: 900px)"
   srcset="img/deliShot-lg_1x.webp 1x, img/deliShot-lg_2x.webp 2x"
   type="image/webp" />
 <source
   media="(min-width: 601px)"
   srcset="img/deliShot-md_1x.webp 1x, img/deliShot-md_2x.webp 2x"
   type="image/webp" />
 <source
   srcset="img/deliShot-sm_1x.webp 1x, img/deliShot-sm_2x.webp 2x"
   type="image/webp" />
 <img
   srcset="img/deliShot-sm_1x.jpg 600w,
   img/deliShot-md_1x.jpg 900w,
   img/deliShot-lg_1x.jpg 1440w"
   src="image_lg_1x.jpg"
   type="image/jpeg"
   alt="The Fishin Shedd Deli" />
</picture>

      </div>
    );
  }
}

export default DeliBG;
