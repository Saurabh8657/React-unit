import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import { useSelector } from "react-redux";

import "./counter.css";

const Counter = () => {
  const themeValue = useSelector( store => store.theme.theme )
  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter"  className={themeValue==="light"? "light_theme":"dark_theme"}>
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons/>
    </div>
  );
};

export default Counter;
