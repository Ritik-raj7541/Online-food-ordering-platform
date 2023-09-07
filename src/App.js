import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { CartProvider } from "./components/CartContext";
import MyCart from "./components/MyCart";
import MyProfile from "./screens/MyProfile";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/myCart" element={<MyCart/>} />
          <Route exact path="/myProfile" element={<MyProfile/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
