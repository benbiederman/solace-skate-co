import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";
import styles from "./ShoppingCart.module.scss";
import { Link } from "react-router-dom";

const ShoppingCart = ({ shopActive, cartList, shopBtn }) => {
  return (
    <div
      className={
        shopActive
          ? `${styles.shoppingCart} ${styles.shoppingCartActive}`
          : `${styles.shoppingCart}`
      }
    >
      {cartList.length > 0 ? (
        <ShoppingCartList cartList={cartList} />
      ) : (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <Link
            className={styles.shopBtn}
            onClick={shopBtn}
            tabIndex={shopActive ? 0 : -1}
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
