import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LogoIn from "./pages/LogoIn";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exict path="/" element={<Home />}></Route>
          <Route exict path="/productlist" element={<ProductList />}></Route>
          <Route exict path="/product" element={<Product />}></Route>
          <Route exict path="/register" element={<Register />}></Route>
          <Route exict path="/login" element={<LogoIn />}></Route>
          <Route exict path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
