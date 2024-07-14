import React from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  const counter = store.getState().counter;
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
