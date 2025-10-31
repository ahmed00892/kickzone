import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Remove one item from cart (by id + hour combo)
  const removeFromCart = (stadiumId, hour) => {
    setCart((prev) =>
      prev.filter((i) => !(i.stadiumId === stadiumId && i.hour === hour))
    );
  };

  // Clear all items
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook for easy use
export const useCart = () => useContext(CartContext);
