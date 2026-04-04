"use client";

import  { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  type?: "rent" | "buy";
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem, type?: "rent" | "buy") => void;
  removeFromCart: (id: number) => void;
  wishlist: CartItem[];
  addToWishlist: (item: CartItem) => void;
  removeFromWishlist: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem, type: "rent" | "buy" = "rent") => {
    setCart((prev) => [...prev, { ...item, type }]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const addToWishlist = (item: CartItem) => {
    setWishlist((prev) => {
      // Prevent duplicates
      if (prev.find((w) => w.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
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

export const useWishlist = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useWishlist must be used within CartProvider");
  }
  return context;
};