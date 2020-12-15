import React from 'react';


import offer1 from "../images/offer1.png"
import offer2 from "../images/offer2.png"
import offer3 from "../images/offer3.png"
export default function Slider() {
  


  
    return (
     <div className="">
       

  
    <div class="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
      <div class="carousel-cell">
        <img className="img" src={offer1} />
      </div>
      <div class="carousel-cell">
      <img className="img" src={offer2} />
      </div>
      <div class="carousel-cell">
      <img className="img" src={offer3} />
      </div>
      <div class="carousel-cell">
      <img className="img" src={offer3} />
      </div>
    </div>

     </div>  
  );
}



