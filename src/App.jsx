import "./App.css";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
