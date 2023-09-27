import styles from "./Product.module.css";
import { useCart } from "./CartContext";
import { ProductProps } from "./myTypes";

const Product = ({ id, title, price, rating, image }: ProductProps) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.product}>
      <h2 className={styles.product__title}>
        <strong>{title}</strong>
      </h2>
      <div className={styles.product__price}>
        <strong>${price}</strong>
      </div>
      <div className={styles.product__rating}>
        <strong>{rating}</strong> ⭐
      </div>
      <img src={image} alt={title} className={styles.product__img} />
      <button className="btn" onClick={() => addToCart(id)}>
        Add to Basket
      </button>
    </div>
  );
};
export default Product;
