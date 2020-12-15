import React from 'react';
import './checkout.css';
import logo from "../../images/logo.svg"
import dummy from "../../images/burgers.jpg"
import plus from "../../images/plus.png"
export default function Checkout() {
return (
<div className="">
   <div className="img-fluid">
      <nav class="navbar navbar-expand-lg py-3  shadow-sm">
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
   </div>
   <div className="container-fluid ">
      <img className=" img-fluid chk-image" src={dummy} alt= "image not Found "/>
   </div>
   
   <div className="container-fluid mt-5 bodys">
      <div className="row">
         <div className="col-md-5 col-lg-5 col-sm-6">
            <p className="p1"> Fish & Co</p>
            <p className="p2"> 2021 State Street, Michigan</p>
         </div>
         <div className="col-md-3 col-lg-3 col-sm-6 ">
            <p className="p3"> Cuisine</p>
            <p className="p4"> chinese, sea-food, vegetarian, vegan</p>
         </div>
         <div className="col-md-2 col-lg-2 col-sm-6 ">
            <p className="p3"> Min Order</p>
            <p> $30</p>
         </div>
         <div className="col-md-2 col-lg-2  col-sm-6 ">
            <button className="abc"> $20 Delivery  </button>
         </div>
      </div>
   </div>
   <hr/>
   <div className="container">
      <div className="row menus">
         <div className="ml-5">
            <a className="aref"> Burger</a>
            <a className="aref">Coffer</a>
            <a className="aref" > Pasta</a>
            <a className="aref"> Rice</a>
         </div>
      </div>
   </div>
   <br/>
   <div className="container-fluid card-body">
      <div className="row ">
         
         <div className="col-lg-8 col-md-8 backk">
            <p className="mt-4 p5"> ... Burgers ...</p>
            <hr/>
            <div className="d-flex justify-content-around">
               <div className="">
                  <p className="mr-5 mn"> Classic Cheese Burger</p>
                  <p className="ml-5 p3 mr-5"> Prepared with a patty, a slice of cheese and special sauce</p>
               </div>
               <div className="">
                  <span className="p2"> From</span> 8$
               </div>
               <div className="">
                  <img className="plus-icon" src={plus} alt="Image not Found"/>
               </div>
            </div>

         </div>

         <div className="col-lg-8 col-md-8 backk">
            <p className="mt-4 p5"> ... Burgers ...</p>
            <hr/>
            <div className="d-flex justify-content-around">
               <div className="">
                  <p className="mr-5 mn"> Classic Cheese Burger</p>
                  <p className="ml-5 p3 mr-5"> Prepared with a patty, a slice of cheese and special sauce</p>
               </div>
               <div className="">
                  <span className="p2"> From</span> 8$
               </div>
               <div className="">
                  <img className="plus-icon" src={plus} alt="Image not Found"/>
               </div>
            </div>
         </div>

         <div className="col-lg-8 col-md-8 backk">
            <p className="mt-4 p5"> ... Burgers ...</p>
            <hr/>
            <div className="d-flex justify-content-around">
               <div className="">
                  <p className="mr-5 mn"> Classic Cheese Burger</p>
                  <p className="ml-5 p3 mr-5"> Prepared with a patty, a slice of cheese and special sauce</p>
               </div>
               <div className="">
                  <span className="p2"> From</span> 8$
               </div>
               <div className="">
                  <img className="plus-icon" src={plus} alt="Image not Found"/>
               </div>
            </div>
         </div>

         <div className="col-lg-4 col-md-4">
        

          <div class="card cart">
            <div class="card-body backk">
                <p className="card-title items"> 0 Item </p>
                <hr/>
                
                <p class="card-text mt-5">No Products Found </p>

              <br/><br/><br/><br/><br/><br/><br/>  
                <a href="#" className="card-link mt-5">Do you have a voucher?</a>
             

                 <div className="row boxs ml-2 mt-3">
                   < div className="col-md-6 ">
                      <p className=" checkbtn">Checkout</p>
                   </ div>
                   < div className="col-md-6">
                   <div className="box-pay">
                   <p className="span">  $0.00</p>
                  </div>
                   </ div>
                 </div>
            </div>
       </div>

               
         </div>
         <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </div>
   </div>
</div>
);
}