import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MaterialThemeProvider> 
        <AuthProvider>
          <CartProvider>
            <ThemeProvider> 
              <App />
            </ThemeProvider>
          </CartProvider>
        </AuthProvider>
      </MaterialThemeProvider>
    </BrowserRouter>
  </StrictMode>
);