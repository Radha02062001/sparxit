import React from "react";

const Validate = () => {
  return (
      <div className="vision-validate"> 
          <div className="validate">
            <div className="validate-content">
              <h1>
                Just a Quick Call Away
                <br />
                From Validating Your Vision
              </h1>
              <p>Make things fast and simple with a productive discussion.</p>
              <button className="val-btn" a href="#">
                Book Consultation with Sunit
              </button>
            </div>
            <div className="validate-img">
              <img src={sunit} alt="" width="255px" height="255px" />
            </div>
            <div className="validate-details">
              <h2>Sumit S Sengar</h2>
              <p>Chief Buisness Officer</p>
              <div className="validate-mail">
                <img src={mail} alt="" width="20px" height="24px" />
                <p>sumit@sparxit.com</p>
              </div>
              <div className="validate-num">
                <img src={phone} alt="" width="20px" height="24px" />
                <p>+ 91-9810230650 </p>
              </div>
              <div className="validate-sumit">
                <img src={sumit} alt="" width="20px" height="24px" />
                <p>Sumit.Sparx</p>
              </div>
            </div>
          </div>
          <div className="project-slides">
            <div className="project-plan">
              <h1> What's Your Project Plan</h1>
              <p>
                Let’s have a quick chat about your plans, ideas, and project
                requirements making it a job of seconds.
              </p>
              <a href="#">Click Here To LIVE CHAT</a>
            </div>
            <div className="vl-plan"></div>
            <div className="project-doc">
              <h1>Got Document's ? Share With Us</h1>
              <p>
                Share your NDA, BRD &amp; all project-related details through
                email. We will reach out to you at the earliest. Here is our
                email:
              </p>
              <a href="#">sales@sparxitsolutions.com</a>
            </div>
            <div className="vl-doc"></div>
            <div className="project-hiring">
              <h1>We Are Hiring</h1>
              <p>
                Become a part of our vision to delivering effective, efficient
                &amp; elegant solutions.
              </p>
              <a href="#">View Opportunities</a>
            </div>
          </div>
          <div className="bar-bold"></div>
          <div className="global-trust">
            <div className="global-lead">
              <h1>
                Trusted By <br /> Leading Global Brands
              </h1>
              <p>Expertise &amp; Commitment of Quality Defines Us</p>
              <div className="global-brands">
                <div className="intel">
                  <img src={intel} alt="" width="90px" height="92px" />
                </div>
                <div className="cisco">
                  <img src={cisco} alt="" width="98px" height="98px" />
                </div>
                <div className="hp">
                  <img src={hp} alt="" width="70px" height="70px" />
                </div>
                <div className="amdocs">
                  <img src={amdocs} alt="" width="70px" height="70px" />
                </div>
                <div className="phzer">
                  <img src={phzer} alt="" width="70px" height="70px" />
                </div>
              </div>
              <div className="bar-end"></div>
            </div>
          </div>
        </div> 
  );
};
export default Validate;
