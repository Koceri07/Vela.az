"use client";

// import React-a ehtiyac yoxdur
// Wishlist üçün ayrı context yarat
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: CartItem[];
  addToCart: (item: CartItem) => void;
  addToWishlist: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  removeFromWishlist: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const addToWishlist = (item: CartItem) => {
    if (!wishlist.find((w) => w.id === item.id)) {
      setWishlist((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
