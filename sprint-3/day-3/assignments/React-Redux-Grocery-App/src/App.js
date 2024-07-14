import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />



        {/* <div data-testid="grocery-app">
        </div> */}
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
