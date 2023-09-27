import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Header = () => {
  const { cart } = useCart();
  return (
    <header className={styles.header}>
      <Link to="" style={{ textDecoration: "none" }}>
        <div className={styles.header__logo}>
          <StorefrontOutlinedIcon
            className={styles.header__logoImage}
            fontSize="large"
          />
          <h1 className="header_logoTitle">eShop</h1>
        </div>
      </Link>
      <div className={styles.header__search}>
        <input
          type="text"
          className={styles.header__searchInput}
          placeholder="Search"
        />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <nav className={styles.header__nav}>
        <Link to="login">
          <div className={styles.nav__item}>
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">
              <strong>Sign In</strong>
            </span>
          </div>
        </Link>
        <div className={styles.nav__item}>
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">
            <strong>Shop</strong>
          </span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className={styles.nav__itemBasket}>
            <span className={styles.nav__itemLineOne}>
              <ShoppingBasketIcon fontSize="large" />
            </span>
            <span className={styles.nav__itemLineTwo}>{cart.length}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
