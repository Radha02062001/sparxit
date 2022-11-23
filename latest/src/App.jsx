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
import Box from './component/main/box/box'
function App() {
  return(
    <>
    <Hero/>
    <Accla/>
    <Motto/>
    <Stake/>
    <Web/> 
    <Block/>
    <Class/>
    <About/>
    <From/>
    <Box/>
    </>
  )
}

export default App
