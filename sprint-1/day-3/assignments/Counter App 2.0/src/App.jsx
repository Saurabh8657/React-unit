import { useState } from "react";

function App() {
  const[counter,setCounter] = useState(0);

  function isPrime(){
    if( counter===0 || counter===1 || counter<0 ) return false ;
    if( counter===2 || counter===3 ) return true ;
    let count = 0;
    for(let i=0; i<=counter; i++){
      if(counter%i===0){
        count++;
      }
    }
    return count===2? true:false ;
  }

  function handleCounter(value){
    setCounter(counter+value) ;
  }
  return (
    <div>
      <h2>Welcome to Counter 2.0</h2>
      <div>
        <button data-testid="minusonebtn" onClick={()=>{handleCounter(-1)}} disabled={counter===0? true:false} >-1</button>
        <button data-testid="plusonebtn" onClick={()=>{handleCounter(1)}} >+1</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>{setCounter(0)}}>Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">This Number is:{counter%2===0? "Even":"Odd"}</span>
        <span data-testid="is-prime">Prime Number: {isPrime()? "true":"false"} </span>
      </div>
    </div>
  );

}

export default App;

