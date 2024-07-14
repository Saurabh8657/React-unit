import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <Provider store={store} >
      <BrowserRouter>
          <div data-testid="grocery-app">
            <AllRoutes />
          </div>
      </BrowserRouter>
    </Provider>
  );
}

//Having a bad day


export default App;
