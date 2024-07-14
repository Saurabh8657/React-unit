
// use the below two arrays for button textContent and id's,

import Button from "./Components/Button";
import Display from "./Components/Display";

////    csss
import "./App.css"
import { Provider } from "react-redux";
import { store } from "./Redux/store";

//textContent
const buttons = [
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "+",
  ".",
  0,
  "=",
  "-",
  "Clear",
];
//buttonid's
const buttonIds = [
  "button-7",
  "button-8",
  "button-9",
  "button-divide",
  "button-4",
  "button-5",
  "button-6",
  "button-multiply",
  "button-1",
  "button-2",
  "button-3",
  "button-add",
  "button-decimal",
  "button-0",
  "button-equals",
  "button-subtract",
  "button-clear",
];

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here


  return (
    <Provider store={store}>
    <div data-testid="data-app" className="calculator">
      <h1>Calculater</h1>
      {/* add your display component here */}
      <Display />
      <div data-testid="buttons" className="buttons" >
       
        {/* create the buttons by mapping the the arr using Button component */}
        { buttons.map( (item,index)=>{
          console.log(buttonIds[index]) ;
          return  <Button key={index} item={item} buttonIds={buttonIds[index]} />
        } ) }
       
      </div>
    </div>
    </Provider>
  );
}

export default App;
