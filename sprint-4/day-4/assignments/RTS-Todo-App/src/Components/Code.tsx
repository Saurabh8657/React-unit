import React from "react";
import Add from "./Add";
import Todos from "./Todos";
function Code() {
  
  return <div style={{display:"flex",justifyContent:"space-around"}} >
    <Add/>
    <Todos/>
  </div>;
}

export default Code;
