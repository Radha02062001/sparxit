import React from "react";
import About from "../../Home/about/about";
import Accla from "../../Home/accla/accla";
import Block from "../../Home/block/block";
import Box from "../../Home/footer/box/box";
import From from "../../Home/from/from";
import Hero from "../../Home/hero/hero";
import Motto from "../../Home/motto/motto";
import Class from "../../Home/reco/reco";
import Stake from "../../Home/stake/stake";
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
