import React from 'react';

import logo from "../images/logo.svg"

import Slider from "./slider";

import Dashboard from "../components/dashboard/dashboard";


export default function Header() {
  


  
  return (
 <div className="">

      
<div className="back-img img-fluid">
 {/* <nav class="navbar navbar-expand-lg py-3  shadow-sm">
  <div class="container">
    <a href="#" class="navbar-brand">
     
        <img src={logo} alt ="Image Not Found "/>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="#" class="nav-link"> Offer <span class="sr-only">(current)</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link "> Need Help </a></li>
        <li class="nav-item"><a href="#" class="nav-link"><button className="english">English </button></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><button className="join"> Join</button></a></li>
      </ul>
    </div>
  </div>
</nav> */}

<nav class="navbar navbar-expand-lg py-3  shadow-sm  ">
         <div class="container">
            <a href="#" class="navbar-brand"> 
            <img src={logo} alt ="Image Not Found "/>
            </a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse ">
               <ul class="navbar-nav ml-auto ml-5">
                  <li class="nav-item active"><a href="#" className="nav-link offer mt-2"> Offer <span class="sr-only">(current)</span></a></li>
                  <li class="nav-item"><a href="#" className="nav-link offer mt-2"> Need Help </a></li>
                  <li class="nav-item"><a href="#" class="nav-link"><button className="english mt-1"><i className="united states flag"></i> English</button></a></li>
                  <li class="nav-item"><a href="#" class="nav-link"><button className="join mt-1"> Join</button></a></li>
               </ul>
            </div>
         </div>
      </nav>



<div className="container text-center form-section">

  
     <h1 className="h1-text">You order we deliver  </h1>


     <p className="p-text">  Get your favorite foods in less than an hour </p>

<div className="row mt-5">
  <div className="col-lg-3"></div>
  <div className="col-lg-7">
  <div class="input-group">
    <input type="text" className="form-control type" placeholder="Search your products from here" />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button">
            <i class="fa fa-search"> Search</i>
          </button>
       </div>
       </div>
  </div>
  </div>


  
  </div>


  </div>  


<div className="sticky">
  <nav class="navbar navbar-expand-lg py-3  shadow-sm ">
         <div class="container">
            <a href="#" class="navbar-brand"> 
            <img src={logo} alt ="Image Not Found "/>

           
            </a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse ">
            <input type="text" className="form-control searchInput" placeholder="Search Your Products Here "/>
               <ul class="navbar-nav ml-auto ml-5">
                  <li class="nav-item active"><a href="#" className="nav-link offer mt-2"> Offer <span class="sr-only">(current)</span></a></li>
                  <li class="nav-item"><a href="#" className="nav-link offer mt-2"> Need Help </a></li>
                  <li class="nav-item"><a href="#" class="nav-link"><button className="english mt-1"><i className="united states flag"></i> English</button></a></li>
                  <li class="nav-item"><a href="#" class="nav-link"><button className="join mt-1"> Join</button></a></li>
               </ul>
            </div>
         </div>
      </nav>
</div>



<Slider/>
<Dashboard/>


  


</div>
    
  );
}

