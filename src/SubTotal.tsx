import { useCart } from "./CartContext";
import styles from "./SubTotal.module.css";

const SubTotal = () => {
  const { cart } = useCart();
  const total = Math.ceil(
    cart.reduce((acc, cartItem) => acc + cartItem.price, 0)
  );
  return (
    <div className={styles.subtotal}>
      <p className={styles.subtotal_amt}>
        <strong>
          SubTotal ({cart.length} ) : {total}{" "}
        </strong>
      </p>

      <small className={styles.subtotal_gift}>
        <input type="checkbox" /> The order contains a gift.
      </small>
      <button className="btn">Proceed to Checkout</button>
    </div>
  );
};
export default SubTotal;
