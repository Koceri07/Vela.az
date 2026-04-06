"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getFavorites,
  getApiErrorMessage,
  removeFavorite as removeFavoriteRequest,
  toggleFavorite,
} from "@/lib/api/client";
import { getSessionUser } from "@/lib/api/session";

export interface CartItem {
  id: number;
  slug?: string;
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
  wishlistError: string | null;
}

const CART_KEY = "vela-cart";
const WISHLIST_KEY = "vela-wishlist";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const rawCart = window.localStorage.getItem(CART_KEY);
      return rawCart ? (JSON.parse(rawCart) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const rawWishlist = window.localStorage.getItem(WISHLIST_KEY);
      return rawWishlist ? (JSON.parse(rawWishlist) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [wishlistError, setWishlistError] = useState<string | null>(null);

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const user = getSessionUser();
    if (!user) {
      return;
    }

    let cancelled = false;

    const loadFavorites = async () => {
      try {
        const favorites = await getFavorites(user.id);
        if (cancelled) {
          return;
        }

        setWishlist(
          favorites.map((favorite) => ({
            id: favorite.productId,
            name: favorite.productName,
            price: favorite.productPrice,
            image: favorite.productImage || "",
          })),
        );
      } catch (error) {
        if (!cancelled) {
          setWishlistError(getApiErrorMessage(error, "Favorites could not be loaded."));
        }
      }
    };

    void loadFavorites();

    return () => {
      cancelled = true;
    };
  }, []);

  const addToCart = (item: CartItem, type: "rent" | "buy" = "rent") => {
    setCart((prev) => [...prev, { ...item, type }]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const addToWishlist = (item: CartItem) => {
    const user = getSessionUser();
    setWishlist((prev) => {
      if (prev.find((wishlistItem) => wishlistItem.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });

    if (!user) {
      return;
    }

    void toggleFavorite(user.id, item.id).catch((error) => {
      setWishlist((prev) => prev.filter((wishlistItem) => wishlistItem.id !== item.id));
      setWishlistError(getApiErrorMessage(error, "Product could not be added to favorites."));
    });
  };

  const removeFromWishlist = (id: number) => {
    const user = getSessionUser();
    const previous = wishlist;

    setWishlist((prev) => prev.filter((item) => item.id !== id));

    if (!user) {
      return;
    }

    void removeFavoriteRequest(user.id, id).catch(async (error) => {
      try {
        await toggleFavorite(user.id, id);
      } catch {
        setWishlist(previous);
      }
      setWishlistError(
        getApiErrorMessage(error, "Product could not be removed from favorites."),
      );
    });
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
        wishlistError,
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
