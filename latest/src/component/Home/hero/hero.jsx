import React from "react";
import "./hero.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };

    return (
       
        <div className="text">
          <div className="te">
           <div className="text1">   
<hr></hr>
            <h1>We Ideate,
                <br/>Innovate,Create <br/></h1>
                <h2>Technology Solutions</h2>
                <div className="tx">
                <p>The goal is to deliver quality-focused<br/>
                 Software products to aspiring businesses.<br/>
                 Our service delivery approach comprises <br/>
                 structured management with an agile <br/>adaption of the latest trends.</p>
                 
                 </div>
             
           </div>
           <div className="text2">
            <h3>Insights To The Innovation</h3>

           <div className="bt">
        <Slider {...settings}>
          
          <div>
            <h3>Complete Guide On DeFi App <br/>Developments</h3>
          </div>
          <div>
            <h3>Best NFT Marketplace Development<br/> Ideas in 2022</h3>
          </div>
          <div>
            <h3>How Much Does It Cost to Develop a <br/>Mobile App?</h3>
          </div>
          <div>
            <h3>How to Build a SaaS Platform Like <br/>Canva?</h3>
          </div>
          <div>
            <h3>How Much Does It Cost to Build a<br/> Blockchain App in 2022?</h3>
          </div>
          
        </Slider>
        </div>
      </div>
     
      
        </div>
        
      <div className="all">
        <img src="https://www.sparxitsolutions.com/assets-style/images/sparx-banner.png"
            alt=""
           width="100%"
           />
        </div>
           </div>
           
      
    );
    }
export default Hero;
