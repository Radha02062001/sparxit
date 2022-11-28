import React from "react";
import "./box.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Box=()=>{
    
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };
return(
    <div className="work">
        <h1>Repository of Our Work</h1>
        <div className="he">
        <h2>Here’s a collection of our prime projects, challenges faced, and final outcomes.
        <button>Explore Case Studies</button></h2>
        
</div>
<div className="box">
   
      <Slider {...settings}>
          
          <div>
          <div className="shop">
      <div className="box1">
      <div className="w1">
            <img src="https://www.sparxitsolutions.com/assets-style/images/getmybook.webp"
        alt=""
        width="300px"
        height="300px"/>

            </div>
      </div>
      <div className="box2">

      <div className="w3">
                    <div className="ne">
            <img src="https://www.sparxitsolutions.com/assets-style/images/getmybook-logo.svg"
        alt=""
        width="100px"
        height="36px"/>
        </div>
        <h3>Read Full Case Study</h3>
        </div>
        <hr></hr>    
        <h3>A Book Portal<br/>
For Learners</h3>
<p>Get My Book is a digital platform providing learners<br/> direct
     access to a vast collection of books. 
    The <br/>platform has been designed to indulge in a rich user <br/>experience.</p>
    <hr></hr>
    <h4>Our Story in Numbers</h4>
    <div className="in">
        <div><h6>250+</h6><br/><h5>Professionals</h5></div>
        <div><h6>90%</h6><br/><h5>Satisfied Clients</h5></div>
        <div><h6>15500+</h6><br/><h5>Projects Undertaken</h5></div>
        
    </div>
    <hr></hr>
      </div>
      </div>
          </div>
          <div>
          <div className="shop1">
      <div className="box3">
      <div className="w1">
            <img src="https://www.sparxitsolutions.com/assets-style/images/home-canis.webp"
        alt=""
        width="300px"
        height="300px"/>

            </div>
      </div>
      <div className="box4">

      <div className="w3">
                    <div className="ne">
            <img src="https://www.sparxitsolutions.com/assets-style/images/getmybook-logo.svg"
        alt=""
        width="100px"
        height="36px"/>
        </div>
        <h3>Read Full Case Study</h3>
        </div>
        <hr></hr>    
        <h3>ERP Solution<br/>
For Construction Firm</h3>
<p>Canis is a web-based ERP application designed to <br/>manage day-to-day 
  tasks with an automated task<br/> management system ensuring maximum productivity.</p>
    <hr></hr>
    <h4>Our Story in Numbers</h4>
    <div className="in">
        <div><h6>250+</h6><br/><h5>Professionals</h5></div>
        <div><h6>90%</h6><br/><h5>Satisfied Clients</h5></div>
        <div><h6>15500+</h6><br/><h5>Projects Undertaken</h5></div>
        
    </div>
    <hr></hr>

      </div>
      </div>
          </div>
          <div>
          <div className="shop2">
      <div className="box5">
      <div className="w1">
            <img src="https://www.sparxitsolutions.com/assets-style/images/home-lifewell.webp"
        alt=""
        width="300px"
        height="300px"/>

            </div>
      </div>
      <div className="box6">
      <div className="w3">
                    <div className="ne">
            <img src="https://www.sparxitsolutions.com/assets-style/images/getmybook-logo.svg"
        alt=""
        width="100px"
        height="36px"/>
        </div>
        <h3>Read Full Case Study</h3>
        </div>
        <hr></hr>    
        <h3>360-Degree<br/>
Wellness Platform</h3>
<p>MyLifeWell is a complete solution package dedicated to wellness and retreat services
   with multiple interfaces for<br/> eCommerce, streaming, and booking offline sessions.

</p>
    <hr></hr>
    <h4>Our Story in Numbers</h4>
    <div className="in">
        <div><h6>250+</h6><br/><h5>Professionals</h5></div>
        <div><h6>90%</h6><br/><h5>Satisfied Clients</h5></div>
        <div><h6>15500+</h6><br/><h5>Projects Undertaken</h5></div>
        
    </div>
    <hr></hr>

      </div>
      </div>
      </div>
          
          </Slider>
        
</div>
</div>
)

}
export default Box