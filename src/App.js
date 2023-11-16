import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MyCart from "./components/MyCart";
import MyProfile from "./screens/MyProfile";
import { SearchProvider } from "./components/SearchContext";
import { CartProvider } from "./components/CartContext";
import { OrderControlProvider } from "./components/OrderControlContext"; 
import ResturantPage from "./screens/ResturantPage";
import LandingAdmin from "./screens/LandingAdmin";

function App() {
  return (
    <OrderControlProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/myCart" element={<MyCart />} />
              <Route exact path="/myProfile" element={<MyProfile />} />
              <Route exact path="/restaurant/:id" element={<ResturantPage/>} />
              <Route exact path="/landingPageAdmin/:id" element = {<LandingAdmin/>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </OrderControlProvider>
    
  );
}

export default App;
