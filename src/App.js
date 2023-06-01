import { Route, Routes } from "react-router";
import "./App.css";

import Mockman from "mockman-js";
import { Home } from "./pages/Home/Home";
import { Header } from "./pages/Header/Header";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/Login/Login";
import { Footer } from "./pages/Footer/Footer";
import { Landing } from "./pages/LandingPage/Landing";
import { SingleProduct } from "./pages/LandingPage/SingleProduct";
import { RequireAuth } from "./Component/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
