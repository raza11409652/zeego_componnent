import React from 'react';
import './dashboard.css';


import offer3 from "../../images/offer3.png"

import Cards from "../cards/cards"

export default function Dashboard() {
  


  
    return (
     <div className="">
       




<div id="content-wrapper" className="d-flex mt-5">
  <div id="sidebar-container" className="bg-light border-right">
   <div className="menu list-group-flush">
      <a href="" className="xxx list-group-item list-group-action bg-light p-3 border-0">
      <i  class=" iconify ion-md-apps lead mr-2"></i> Chinese </a>
      <a href="" class="list-group-item list-group-action bg-light p-3 border-0">
      <i  class=" iconify ion-md-people lead mr-2"></i> Sea Food</a>
      <a href="" class="list-group-item list-group-action bg-light p-3 border-0">
      <i  class=" iconify ion-md-stats lead mr-2"></i> Fast Food</a>
      <a href="" class="list-group-item list-group-action bg-light p-3 border-0">
      <i  class=" iconify ion-md-calendar lead mr-2"></i> Pizza</a>
      <a href="" class="list-group-item list-group-action bg-light p-3 border-0">
      <i  class=" iconify ion-md-person lead mr-2"></i> Indian</a>
      
   </div>      
</div>

<Cards/>




</div>
</div>

       


  );
}



