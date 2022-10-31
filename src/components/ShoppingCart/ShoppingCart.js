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
        <div className={styles.cartList}>
          {cartList.map((item) => {
            return <p>Need item component</p>;
          })}
        </div>
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
