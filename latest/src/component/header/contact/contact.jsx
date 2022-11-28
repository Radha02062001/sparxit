import React from "react";
import "./contact.css";
import bank from "../../../assets/images/contact/bank.svg";
import clutch from "../../../assets/images/contact/clutch.svg";
import facebook from "../../../assets/images/contact/facebook.svg";
import glassdoor from "../../../assets/images/contact/glassdoor.svg";
import goodfirms from "../../../assets/images/contact/goodfirms.svg";
import google from "../../../assets/images/contact/google.svg";
import skilled from "../../../assets/images/contact/skilled.svg";
import sunit from "../../../assets/images/contact/sunit.jpg";
import mail from "../../../assets/icons/contact/mail .svg.svg";
import phone from "../../../assets/icons/contact/phone.svg";
import sumit from "../../../assets/icons/contact/s.svg";
import intel from "../../../assets/icons/contact/intel.jpg";
import cisco from "../../../assets/images/contact/cisco.jpg";
import hp from "../../../assets/images/contact/hp.jpg";
import amdocs from "../../../assets/images/contact/amdocs.jpg";
import phzer from "../../../assets/images/contact/phzer.jpg";
import Slider from "react-slick";
const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-menu">
          <h1>
            Discuss Your Vision
            <br />
            With The Industry Best
          </h1>
          <p>
            Let our experts unfold the 360-degree roadmap of your business plan.
          </p>
          <div className="bar"></div>
          <div className="customers-content">
            <div className="customers">
              <strong>
                We are our customer's favourite which makes us a best-rated
                solutions provider
              </strong>
            </div>
            <>
              <Slider {...settings}>
                <div className="rate-slider">
                  <div className="ratings">
                    <img src={bank} alt="" width="214px" height="80px" />
                    <img src={clutch} alt="" width="214px" height="80px" />
                    <img src={facebook} alt="" width="214px" height="80px" />
                    <img src={glassdoor} alt="" width="214px" height="80px" />
                    <img src={goodfirms} alt="" width="214px" height="80px" />
                    <img src={google} alt="" width="214px" height="80px" />
                    <img src={skilled} alt="" width="214px" height="80px" />
                  </div>
                </div>
              </Slider>
            </>
          </div>

          <div className="bar-hr"></div>
          <>
            <Slider {...settings}>
              <div className="testi-rating">
                <div className="testimonal-slider">
                  <div className="testimonal">
                    <h2>
                      <span>Bree </span>
                      Has Trusted Our Excellence.Are you The Next?
                    </h2>

                    <div className="testimonal-img">
                      <img
                        src="https://www.sparxitsolutions.com/assets-style/images/patrick-moriarty.jpg"
                        alt=""
                        width="58px"
                        height="58px"
                      />
                      <div className="testimonal-id">
                        <h5>Bree Argetsinger </h5>
                        <h4>United States</h4>
                      </div>
                    </div>
                  </div>
                  <p>
                    “It has been delightful to work with Sparx IT Solutions.
                    They offered quality solutions within my budget. I would
                    highly recommend them, if someone is looking to hiring a
                    website design and development company. Thanks guys.”
                  </p>
                </div>
              </div>

              <div className="testimonal-slider">
                <div className="testimonal">
                  <h2>
                    <span>Stouvant </span>
                    Has Trusted Our Excellence.Are you The Next?
                  </h2>

                  <div className="testimonal-img">
                    <img
                      src="https://www.sparxitsolutions.com/assets-style/images/bree-argetsinger.jpg"
                      alt=""
                      width="58px"
                      height="58px"
                    />
                    <div className="testimonal-id">
                      <h5>Stouvant Pittie </h5>
                      <h4>Director</h4>
                    </div>
                  </div>
                </div>
                <p>
                  “Sparx IT Solutions have been one of the Better Developers
                  that we have worked with for our magento site. They have
                  understood &amp; Executed all the tasks assigned in a fast and
                  Professional Manager. Stouvant Pittie,
                  Director(suhanipittie.com)”
                </p>
              </div>

              <div className="testimonal-slider">
                <div className="testimonal">
                  <h2>
                    <span>Patrick </span>
                    Has Trusted Our Excellence.Are you The Next?
                  </h2>

                  <div className="testimonal-img">
                    <img
                      src="https://www.sparxitsolutions.com/assets-style/images/patrick-moriarty.jpg"
                      alt=""
                      width="58px"
                      height="58px"
                    />
                    <div className="testimonal-id">
                      <h5>
                        <strong>United States</strong>
                      </h5>
                      <h4>United States</h4>
                    </div>
                  </div>
                </div>
                <p>
                  “The new site is excellent, receiving good feedback from its
                  users that is reflected in an increase in business sales. All
                  bugs were addressed with technical skill, while the new design
                  is modern and attractive. The team was active and
                  communicative, providing good, regular updates.”
                </p>
              </div>
            </Slider>
          </>
          <div className="locations">
            <h1>LOCATIONS</h1>
            <div className="country-india">
              <img
                src="https://www.sparxitsolutions.com/assets-style/images/india-flag.svg"
                alt=""
                width="20"
                height="13.3"
              />
              <h4>India Office</h4>
            </div>
            <h5>
              H-21, First Floor, Sector-63, Noida,
              <br /> Uttar Pradesh 201301,
            </h5>
            <a href="#">tel:+919810230650</a>

            <div className="country-usa">
              <img
                src="https://www.sparxitsolutions.com/assets-style/images/us-flag.svg"
                alt=""
                width="20"
                height="13.3"
              />
              <h4>USA Office</h4>
            </div>
            <h5>
              PMB #6020, 477 Madison Ave 6th FL,
              <br />
              New York, NY 10022,
            </h5>
            <a href="#">tel:+19177759550</a>

            <div className="country-uk">
              <img
                src="https://www.sparxitsolutions.com/assets-style/images/uk-flag.svg"
                alt=""
                width="20"
                height="13.3"
              />
              <h4>UK Office</h4>
            </div>
            <h5>
              Kemp House, 152 - 160 City Road,
              <br />
              London EC1V 2NX UK
            </h5>
            <a href="#">tel:+442032397499</a>
          </div>
        </div>
        <div className="contact-form">
          <h3> Take the First Step Towards Greatness</h3>
          <div className="form">
            <div className="inputs">
              <label htmlFor="username"></label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="inputs">
              <label htmlFor="phoneno"></label>
              <input type="number" name="phone" placeholder="Phone" />
            </div>
            <div className="inputs">
              <label htmlFor="mail"></label>
              <input type="mail" name="mail" placeholder="Email" />
            </div>
            <div className="inputs">
              <label htmlFor="budget"></label>
              <input type="budget" name="budget" placeholder="Budget" />
            </div>
            <div className="inputs">
              <textarea
                id="requirement"
                name="requirement"
                placeholder="Requirement"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};
export default Contact;
