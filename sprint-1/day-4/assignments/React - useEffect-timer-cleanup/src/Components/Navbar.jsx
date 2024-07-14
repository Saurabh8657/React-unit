import { useState } from "react";

export default function Navbar({setdisplayHomeOrTimer, myvar}) {
  return (
    <div data-cy="navbar" className="nav">
      <div>
        <h2>UseEffect Timer</h2>
      </div>

      <div>
        <button className="navigate" id="nav-home"  onClick={()=>{setdisplayHomeOrTimer(true)}} > Home</button>
        <button className="navigate" id="nav-timer"  onClick={()=>{setdisplayHomeOrTimer(false)}} > View Timer</button>
      </div>
    </div>
  );
}


export function FABavbar(props) {
  console.log("props", props)
}