import logo from "../../images/logo-white.png";
import styles from "./Navigation.module.scss";
import shoppingCart from "../../images/icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Navigation = ({ cartList }) => {
  const [headerActive, setHeaderActive] = useState(false);
  const [shopActive, setShopActive] = useState(false);

  const activateHeader = () => {
    setShopActive(false);
    setHeaderActive(!headerActive);
  };

  const activateCart = () => {
    if (window.innerWidth < 1024) {
      setHeaderActive(false);
    }
    setShopActive(!shopActive);
  };

  const linkClick = () => {
    if (window.innerWidth < 1024) {
      setHeaderActive(false);
    }
    setShopActive(false);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setHeaderActive(true);
    }
  }, []);

  const shopBtn = () => {
    window.location = "/shop";
    setShopActive(false);
  };

  return (
    <header className={headerActive ? styles.headerActive : null}>
      <button className={styles.skipBtn}>Skip to content</button>
      <Link to="/" onClick={linkClick}>
        <img src={logo} alt="Solace Skate Co. logo" />
      </Link>

      <button
        type="button"
        className={styles.headerMenuToggle}
        aria-label="Menu"
        aria-expanded={headerActive}
        arta-controls="header-navigation"
        onClick={activateHeader}
      >
        <span className={styles.hamburger}></span>
      </button>

      <nav>
        <Link to="/" onClick={linkClick} tabIndex={headerActive ? "0" : "-1"}>
          Home
        </Link>
        <Link
          to="/team"
          onClick={linkClick}
          tabIndex={headerActive ? "0" : "-1"}
        >
          Team
        </Link>
        <Link
          to="/shop"
          onClick={linkClick}
          tabIndex={headerActive ? "0" : "-1"}
        >
          Shop
        </Link>
      </nav>
      <button
        type="button"
        className={styles.cart}
        aria-label="Shopping Cart"
        aria-expanded={false}
        aria-controls="header-shopping cart"
        onClick={activateCart}
      >
        {cartList.length > 0 && <span>{cartList.length}</span>}
        <img src={shoppingCart} alt="Shopping Cart icon" />
      </button>
      <ShoppingCart
        shopActive={shopActive}
        cartList={cartList}
        shopBtn={shopBtn}
      />
    </header>
  );
};

export default Navigation;
