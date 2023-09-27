import { CartProps } from "./myTypes";
import styles from "./CartProduct.module.css";
import { useCart } from "./CartContext";
const CartProduct = ({
  cartId,
  id,
  title,
  price,
  rating,
  image,
}: CartProps) => {
  const { deleteFromCart } = useCart();
  return (
    <div className={styles.cartProduct}>
      <img src={image} alt={title} className={styles.cartProduct_image} />
      <div className={styles.cartProduct__details}>
        <div className="cartProduct_detailsTitle">
          <strong>{title}</strong>
        </div>
        <div className="cartProduct__detailsPrice">
          <strong>${price}</strong>
        </div>
        <div className="cartProduct__detailsRating">{rating} ⭐</div>
        <button onClick={() => deleteFromCart(cartId)} className="btn">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};
export default CartProduct;
