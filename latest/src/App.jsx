import { useState } from "react";

import Header from "./component/Home/header/header";
import Footer from "./component/Home/footer/footer";

import Contact from "./component/Home/header/contact/contact";

import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/services/home";
import Services from "./component/pages/services/service";
import Ecom from "./component/pages/services/ecom"
import Portfolio from "./component/pages/work/portfolio";
import Serving from "./component/pages/services/design";
//import Webdesign from "./component/pages/services/design";

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
        <Route path="/ecom" element={<Ecom/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
       <Route path="/webdesign" element={<Serving/>}/>
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
