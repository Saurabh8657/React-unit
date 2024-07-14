import React from "react";
import { handleAdd, handleReduce } from "../Redux/action";
import { useDispatch } from "react-redux";

const CounterButtons = () => {

  const dispatch = useDispatch();
  return (
    <div data-testid="counterButtons">

      <button data-testid="addButton" onClick={()=>{ dispatch(handleAdd(1)) }} >
        ADD
      </button>

      <button data-testid="reduceButton" onClick={()=>{dispatch(handleReduce(1))}} >
        REDUCE
      </button>

    </div>
  );
};

export default CounterButtons;
