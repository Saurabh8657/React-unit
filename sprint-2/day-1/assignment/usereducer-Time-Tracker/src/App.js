import "./App.css";
import { AddActivity } from "./component/AddActivity";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddActivity />
    </div>
  );
}

export default App;
