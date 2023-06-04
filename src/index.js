import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider } from "./Contexts/contexts";
import { FilterProvider } from "./Contexts/filterContext";
import { AuthProvider } from "./Contexts/AuthContex";
import { CartProvider } from "./Contexts/CartContext";
import { WishlistProvider } from "./Contexts/WishlistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <FilterProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </FilterProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
