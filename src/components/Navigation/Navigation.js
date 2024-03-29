import logo from "../../images/logo-white.png";
import styles from "./Navigation.module.scss";
import shoppingCart from "../../images/icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Navigation = ({ cartList }) => {
  const [headerActive, setHeaderActive] = useState(false);

  const activateHeader = () => {
    setHeaderActive(!headerActive);
  };

  const linkClick = () => {
    if (window.innerWidth < 1024) {
      setHeaderActive(false);
    }
  };

  const cartBtnClick = () => {
    if (window.innerWidth < 1024) {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setHeaderActive(true);
    }
  }, []);

  const skipBtnHandler = (e) => {
    if ((e.type === "onKeyDown" && e.code === "Enter") || e.type === "click") {
      document.location = "#main";
    }
  };

  return (
    <header className={headerActive ? styles.headerActive : null}>
      <button
        onClick={(e) => skipBtnHandler(e)}
        onKeyDown={(e) => skipBtnHandler(e)}
        className={styles.skipBtn}
      >
        Skip to content
      </button>
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
          to="/shop"
          onClick={linkClick}
          tabIndex={headerActive ? "0" : "-1"}
        >
          Shop
        </Link>
      </nav>
      <Link to="/cart" className={styles.cartBtn}>
        <button
          type="button"
          className={styles.cart}
          aria-label="Shopping Cart"
          aria-expanded={false}
          aria-controls="header-shopping cart"
          onClick={cartBtnClick}
        >
          {cartList.length > 0 && <span>{cartList.length}</span>}
          <img src={shoppingCart} alt="Shopping Cart icon" />
        </button>
      </Link>
    </header>
  );
};

export default Navigation;
