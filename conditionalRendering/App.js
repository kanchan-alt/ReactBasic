import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";



const AppLayout = ()=>{
    return(
        <Heading/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)



 