
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import WishlistProvider from "./context/WishlistProvider.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
