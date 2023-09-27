import styles from "./Home.module.css";
import products from "./products";
import Product from "./Product";

const Home = () => {
  return (
    <main>
      <div className={styles.main}>
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt="main_image"
          className={styles.main__image}
        />

        <div className="main__products">
          {products.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Home;
