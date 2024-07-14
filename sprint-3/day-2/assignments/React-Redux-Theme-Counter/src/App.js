import "./App.css";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Theme />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
