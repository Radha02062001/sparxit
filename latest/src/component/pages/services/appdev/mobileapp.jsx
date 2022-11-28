import React from "react";
import "./mobileapp.css";
import { Link } from "react-router-dom";
const Mobile = () => {
  return (
    <div className="service">
      <div className="service1">
        <h1>
          Mobile App <br />
          Development <br />
          Company
        </h1>
        <hr></hr>
        <div className="expertise">
          <div className="ui"> UI/UX Design</div>
          <div className="hy"> Hybrid App Development</div>
          <div className="io"> IoT</div>
          <div className="fe"> Feature-Packaged</div>
          <div className="ad"> Advanced Tech Stack</div>
          <div className="st"> Mobile strategy</div>
        </div>
        <hr></hr>
      </div>
      <div className="service2">
        <hr></hr>
        <h1>
          End to End Mobile App <br />
          Development Services
        </h1>
        <p>
          Sparx IT Solutions serves Startups, SMBs, and Enterprises.
          <br />
          Our tailor-made native and cross-platform solutions boost
          <br /> their growth. We create competitive mobile apps for various
          <br /> industrial domains.Our mobile app developers follow market
          <br /> trends to ideate, innovate, and create mobile apps. This adds
          <br /> engagement and modernity to apps. Businesses achieve <br />
          desired user retention rates with these apps.Let’s Discuss Your Idea
        </p>
        <button>Let's Discuss Your idea</button>
      </div>
    </div>
  );
};
export default Mobile;
