import { useState } from "react";



function App() {
 const[player,setPlayer] = useState(true) ;
 const[total,setTotal] = useState(0) ;

 function handleTotal(value){
    setTotal(total+value) ;
    setPlayer(!player)
  }
  function resetFunc(){
    setTotal(0) ;
    setPlayer(true) ;
  }
  return (
    <div className="App">
      <h1>Welcome to Reach Ten Mini-Game</h1>
      {/* Display Player Turn here */}
      <span data-testid="turn-container">Its Your Turn: { total<10 ?  player? "Player 1":"Player 2":"Game Over"}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" onClick={ ()=>{handleTotal(1)}} disabled={total===10? true:false} >+1</button>
        <button data-testid="add-two-btn" onClick={()=>{handleTotal(2)}} disabled={total<9? false:true} >+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{total}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">Winner: {total<10? "Still To Be Decided":player? "Player 2":"Player 1"}</span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={resetFunc}>Reset Game</button>
    </div>
  );
}

export default App;
