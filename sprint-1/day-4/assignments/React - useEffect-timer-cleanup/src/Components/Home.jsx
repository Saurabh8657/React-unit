import React from "react";
import { useState,useEffect } from "react";



export default function Home ({setdisplayHomeOrTimer}) {
  const [gototimer,setGoToTimer] = useState(false);
  return (
    <div id="home">
      <h1>Welcome to useEffect Timer</h1>
      <br />
      <button id="home-timer" onClick={()=>{setdisplayHomeOrTimer(false)}}>Go to Timer</button>
    </div>
  );
};
