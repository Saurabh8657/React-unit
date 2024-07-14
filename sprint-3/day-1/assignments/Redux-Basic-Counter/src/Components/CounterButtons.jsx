import React from "react";
import { store } from "../Redux/store";
import { ADD, REDUCE } from "../Redux/actionTypes";

const CounterButtons = () => {
  // const dispatch=useDispatch();
  

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={()=> store.dispatch({type: ADD, payload:1})}>ADD</button>
      <button data-testid="reduceButton" onClick={() => store.dispatch({type: REDUCE, payload:1})}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
