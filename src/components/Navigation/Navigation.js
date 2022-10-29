import logo from "../../images/logo-white.png";
import styles from "./Navigation.module.scss";
import shoppingCart from "../../images/icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Navigation = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [shopActive, setShopActive] = useState(false);

  const activateHeader = () => {
    setHeaderActive(!headerActive);
  };

  const linkClick = () => {
    setHeaderActive(false);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setHeaderActive(true);
    }
  }, []);

  return (
    <header className={headerActive ? styles.headerActive : null}>
      <button className={styles.skipBtn}>Skip to content</button>
      <Link to="/">
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
      >
        <img src={shoppingCart} alt="Shopping Cart icon" />
      </button>
    </header>
  );
};

export default Navigation;
