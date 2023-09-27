export interface ProductProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export interface CartProps {
  cartId: number;
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export interface CartContextType {
  cart: CartProps[];
  addToCart: (id: string) => void;
  deleteFromCart: (id: number) => void;
}
