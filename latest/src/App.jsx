import { useState } from "react";
import Accla from "./component/Home/Acclamations/accla";
import Hero from "./component/Home/Heroslide/hero";
import Motto from "./component/Home/Motto/motto";
import Stake from "./component/Home/Stakeholders/stake";
import Web from "./component/Home/web/web";
import Block from "./component/Home/ReshapingCards/block";
import Class from "./component/Home/Recognition/reco";
import About from "./component/Home/Testimonals/about";
import From from "./component/Home/Developmentcost/from";
import Header from "./component/Home/header/header";
import Footer from "./component/Home/footer/footer";
import Mobile from "./component/pages/services/appdev/mobileapp";
import Map from "./component/pages/services/appdev/map/map";
import Develop from "./component/pages/services/appdev/Development/development";
import Contact from "./component/Home/header/contact/contact";
import Box from "./component/Home/footer/Repository/box";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/services/home";
import Services from "./component/pages/services/service";
import Ecom from "./component/pages/services/ecom";
// import Webdesign from "./component/pages/services/webdesign/webdesign";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ecom" element={<Ecom />} />
      </Routes>

      <Footer />
      {/* <Hero />
      <Accla />
      <Motto />
      <Stake />
      <Web />
      <Block />
      <Class />
      <Box />
      <About />
      <From />
       */}
      {/* <Mobile />
      <Map /> */}
    </>
  );
}

export default App;
