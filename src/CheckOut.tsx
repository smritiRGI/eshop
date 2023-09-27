import { useCart } from "./CartContext";
import styles from "./CheckOut.module.css";
import CartProduct from "./CartProduct";
import SubTotal from "./SubTotal";

const CheckOut = () => {
  const { cart } = useCart();
  return (
    <>
      <div className={styles.checkout}>
        <div className={styles.checkout__left}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className={styles.checkout__ad}
          />
          <div className="checkout__shoppingBasket">
            <h3>
              <strong>Your Shopping Basket</strong>
            </h3>
            {cart.map((cartItem) => (
              <CartProduct
                cartId={cartItem.cartId}
                id={cartItem.id}
                title={cartItem.title}
                price={cartItem.price}
                rating={cartItem.rating}
                image={cartItem.image}
                key={cartItem.cartId}
              />
            ))}
          </div>
        </div>
        <div className={styles.checkout__right}>
          <SubTotal />
        </div>
      </div>
    </>
  );
};
export default CheckOut;
