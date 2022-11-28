import React from "react";
import Ecommerce from "./ecommerce/ecomweb/ecomm";
import Map from "./appdev/map/map";
import Growth from "./appdev/Growth/growth";
import Steps from "./appdev/Steps/steps";
import Boost from "./appdev/Boos/boost";
import Request from "./appdev/Request/request";
import Offering from "./ecommerce/offer/offer";
import Agile from "./ecommerce/Agile/agile";
import Portfolio from "./ecommerce/Port/port";
const Ecom=()=>{
    return(
<>
<Ecommerce/>
<Map />
<Offering/>
<Agile/>
<Portfolio/>
    <Growth/>
    <Steps/> 
    <Boost/>
    <Request/>
</>
    )
}
export default Ecom