import React from "react";
import "./about.css"
import don from "../../../assets/images/brandon.jpg"
const About=()=>{
    return(
<div className="about">
<h1>What People Say About Us</h1>
    <div className="us">
    
        <div className="name">
        <img className="img" src={don} alt="" />
        <h2>Brandon-J.-Murray</h2>
        <h3>Germany</h3>
        </div>
        <p>I built my website using Joomla. It was around 10 <br/>months that I spent on this website. 
            The time I started<br/> facing problem, I thought to hire an expert. I must say<br/> that you guys worked wonders.
             You hard work and <br/>dedication made me work with you for more three<br/> projects. 
            Your expertise, hard work and custom-script<br/> are worth-appreciating.
           
 </p>   

<div className="vl"></div>
<div className="dev">
    <p>We are our customers’ <br/>favourite which makes us a <br/>best-rated solutions provider.</p>
    
</div>
    </div>
    <hr></hr>
    </div>

    )
}
export default About