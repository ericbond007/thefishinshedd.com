import React, { Component } from 'react';
import './ProductsBG.css';

class ProductsBG extends Component {
  render() {
    return (
      <div className="container-fluid productsBG animated fadeInUp">
  <picture>
 <source
   media="(min-width: 900px)"
   srcset="img/southPano-lg_1x.webp 1x, img/southPano-lg_2x.webp 2x"
   type="image/webp" />
 <source
   media="(min-width: 601px)"
   srcset="img/southPano-md_1x.webp 1x, img/southPano-md_2x.webp 2x"
   type="image/webp" />
 <source
   srcset="img/southPano-sm_1x.webp 1x, img/southPano-sm_2x.webp 2x"
   type="image/webp" />
 <img
   srcset="img/southPano-sm_1x.jpg 600w,
   img/southPano-md_1x.jpg 900w,
   img/southPano-lg_1x.jpg 1440w"
   src="image_lg_1x.jpg"
   type="image/jpeg"
   alt="The Fishin Shedd" />
</picture>

      </div>
    );
  }
}

export default ProductsBG;
