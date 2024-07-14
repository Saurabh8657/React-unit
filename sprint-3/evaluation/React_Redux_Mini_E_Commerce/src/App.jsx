import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Navbar from "./Components/Navbar";
import ProductsList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/WishList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      {/* Create all routes here */}
    </BrowserRouter>
    </Provider>
  );
}
