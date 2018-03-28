import React, { Component } from 'react';
import './FishingBG.css';

class FishingBG extends Component {
  render() {
    return (
      <div className="container-fluid fishingBG animated fadeInUp">

   <picture>
 <source
   media="(min-width: 900px)"
   srcSet="img/frontPorch-lg_1x.webp 1x, img/frontPorch-lg_2x.webp 2x"
   type="image/webp" />
 <source
   media="(min-width: 601px)"
   srcSet="img/frontPorch-md_1x.webp 1x, img/frontPorch-md_2x.webp 2x"
   type="image/webp" />
 <source
   srcSet="img/frontPorch-sm_1x.webp 1x, img/frontPorch-sm_2x.webp 2x"
   type="image/webp" />
 <img
   srcSet="img/frontPorch-sm_1x.jpg 600w,
   img/frontPorch-md_1x.jpg 900w,
   img/frontPorch-lg_1x.jpg 1440w"
   src="img/frontPorch-lg_1x.jpg"
   type="image/jpeg"
   alt="Minnow Tanks at The Shedd" />
</picture>

      </div>
    );
  }
}

export default FishingBG;
