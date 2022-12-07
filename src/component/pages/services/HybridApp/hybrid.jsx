import React from "react";
import "./hybrid.css";
import { Link } from "react-router-dom";
const Hybrid = () => {
  // const hybrids = [
  //   { id: 01, name: "React Native" },
  //   { id: 02, name: "Flutter" },
  //   { id: 03, name: "Optimized Coding" },
  //   { id: 04, name: "Cost Friendly" },
  //   { id: 05, name: "Optimized Performance" },
  //   { id: 06, name: "ipad & Tablet Support" },
  // ];
  return (
    <div className="hybrid-app">
      <div className="hybrid-title">
        <h1>Hybrid App Development</h1>

        <div className="hybrid-products">
          <div className="sk">
            <div className="doll">
              <p>01</p>
              <p>React Native</p>
              <p>02</p>
              <p>React Native</p>
              <p>03</p>
              <p>React Native</p>
            </div>
            {/* <div className="nk">
              <p>04</p>
              <p>React Native</p>
              <p>05</p>
              <p>React Native</p>
              <p>06</p>
              <p>React Native</p>
            </div> */}
          </div>
          <div className="grid2">
            <h1>react</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hybrid;
