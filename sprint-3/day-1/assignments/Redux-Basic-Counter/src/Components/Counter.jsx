import React, { useEffect, useState } from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { store } from "../Redux/store";

const Counter = () => {
  const [state, setState] = useState(0);
  const forceUpdate=()=> setState((prev) => prev+1);
  useEffect(() => {
    const subscribe=store.subscribe(forceUpdate);
    return ()=>{
      subscribe();
    };
  },[]);
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
       <CounterValue />
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons />
    </div>
  );
};

export default Counter;
