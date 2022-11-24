import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Accla from "./component/main/accla/accla"
import Hero from "./component/main/hero/hero"
import Motto from './component/main/motto/motto'
import Stake from './component/main/stake/stake'
import Web from './component/main/web/web'
import Block from './component/main/block/block'
import Class from './component/main/reco/reco'
import About from "./component/main/about/about"
import From from "./component/main/from/from"
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Mobile from './component/pages/services/appdev/mobileapp'
import Map from './component/pages/services/appdev/map/map'
import Develop from './component/pages/services/appdev/Development/development'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Accla/>
    <Motto/>
    <Stake/>
    <Web/> 
    <Block/>
    <Class/>
    <About/>
    <From/>
    <Footer/>
    <Mobile/>
    <Map/>
    <Develop/>
    </>
  );
}

export default App;
