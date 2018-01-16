import React, { Component } from 'react';
import './HomeBG.css';

class HomeBG extends Component {
  render() {
    return (
      <div className="container-fluid homeBG animated fadeInUp">
        <picture>
 <source
   media="(min-width: 900px)"
   srcset="img/sheddFrontPano-lg_1x.webp 1x, img/sheddFrontPano-lg_2x.webp 2x"
   type="image/webp" />
 <source
   media="(min-width: 601px)"
   srcset="img/sheddFrontPano-md_1x.webp 1x, img/sheddFrontPano-md_2x.webp 2x"
   type="image/webp" />
 <source
   srcset="img/sheddFrontPano-sm_1x.webp 1x, img/sheddFrontPano-sm_2x.webp 2x"
   type="image/webp" />
 <img
   srcset="img/sheddFrontPano-sm_1x.jpg 600w,
   img/sheddFrontPano-md_1x.jpg 900w,
   img/sheddFrontPano-lg_1x.jpg 1440w"
   src="image_lg_1x.jpg"
   type="image/jpeg"
   alt="The Fishin Shedd" />
</picture>
      </div>
    );
  }
}

export default HomeBG;
