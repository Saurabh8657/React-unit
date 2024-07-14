import "./App.css";
import Counter from "./Components/Counter";
// import { store } from "./Redux/store";
// import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <Counter />
      {/* </Provider>
       */}
    </div>
  );
}

export default App;
