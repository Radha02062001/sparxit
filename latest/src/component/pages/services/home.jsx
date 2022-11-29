import React from "react";
import About from "../../Home/Testimonals/about";
import Accla from "../../Home/Acclamations/accla";
import Block from "../../Home/ReshapingCards/block";
import Box from "../../Home/footer/Repository/box";
import From from "../../Home/Developmentcost/from";
import Hero from "../../Home/Heroslide/hero";
import Motto from "../../Home/Motto/motto";
import Class from "../../Home/Recognition/reco";
import Stake from "../../Home/Stakeholders/stake";
import Web from "../../Home/web/web";
const Home = () => {
  return (
    <>
      <Hero />
      <Accla />
      <Motto />
      <Stake />
      <Web />
      <Block />
      <Class />
      <Box />
      <About />
      <From />
    </>
  );
};
export default Home;
