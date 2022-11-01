import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";
import styles from "./ShoppingCart.module.scss";

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
          <button onClick={shopBtn}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
