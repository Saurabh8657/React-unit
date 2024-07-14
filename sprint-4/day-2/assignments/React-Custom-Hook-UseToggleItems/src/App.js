import "./App.css";
import { useToggleItems } from "./hooks/useToggleItems";

function App() {
  const initialArr = ["A", "B", "C"] ;
  const [ state, togglePosition ] = useToggleItems(initialArr,1);
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <h1 data-testid="status">{state}</h1>
      <button data-testid="toggle" onClick={togglePosition} >Toggle</button>
    </div>
  );
}

export default App;
