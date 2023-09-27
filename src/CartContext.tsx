import React, { createContext, useState, useContext, useRef } from "react";
import { CartProps, CartContextType, ProductProps } from "./myTypes";
import products from "./products";

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const cartIdRef = useRef(100);

  const addToCart = (id: string) => {
    const product: ProductProps = products.filter(
      (product) => product.id === id
    )[0];
    const cartItem: CartProps = {
      ...product,
      cartId: cartIdRef.current,
    };
    cartIdRef.current = cartIdRef.current + 1;

    setCart([...cart, cartItem]);
  };

  const deleteFromCart = (id: number) => {
    const newCart = cart.filter((cartItem) => cartItem.cartId !== id);
    setCart((cart) => (cart = newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used within the provider");
  return cart;
}

export { CartProvider, useCart };
