import "./styles.css";
import Home from "./Components/Home";
import Navbar, { FABavbar } from "./Components/Navbar";
import Timer from "./Components/Timer";
import { useEffect, useState } from "react";
export default function App() {
  const [displayHomeOrTimer,setdisplayHomeOrTimer] = useState() ;
  const [ myvar, setMyVar ] = useState("heyyyyyyyyyyy")
  function myFunction() {
    setMyVar(1)
  }
  
  // useEffect( ()=>{
  //   // myFunction()
  //   setdisplayHomeOrTimer(true) ;
  // },[] )

  useEffect( () => { console.log('whatsup')}, [myvar] )

  return (<div className="App">
          {/* heyyyyyyyyyyyyyyy */}
          {myvar}
          <button onClick={()=>{setMyVar(100)}}>butto Click me </button>
          <Navbar setdisplayHomeOrTimer={setdisplayHomeOrTimer} />
          {displayHomeOrTimer ? <Home setdisplayHomeOrTimer={setdisplayHomeOrTimer} /> : <Timer/>}


      </div>
  )
}
