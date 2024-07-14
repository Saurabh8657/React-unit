import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const CounterValue = useSelector(state=>state.counter.counter)
  return <div data-testid="counterValue">
    <h1> {CounterValue} </h1> 
  </div>;
};

export default CounterValue;
