import { useState } from "react";
import Accla from "./component/Home/accla/accla";
import Hero from "./component/Home/hero/hero";
import Motto from "./component/Home/motto/motto";
import Stake from "./component/Home/stake/stake";
import Web from "./component/Home/web/web";
import Block from "./component/Home/block/block";
import Class from "./component/Home/reco/reco";
import About from "./component/Home/about/about";
import From from "./component/Home/from/from";
import Header from "./component/Home/header/header";
import Footer from "./component/Home/footer/footer";
import Mobile from "./component/pages/services/appdev/mobileapp";
import Map from "./component/pages/services/appdev/map/map";
import Develop from "./component/pages/services/appdev/Development/development";
import Contact from "./component/Home/header/contact/contact";
import Box from "./component/Home/footer/box/box";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/services/home";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/map" element={<Map />} />
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
      <Mobile />
      <Map />
    </>
  );
}

export default App;
