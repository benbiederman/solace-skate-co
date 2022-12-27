import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";

const Cart = ({ cartList }) => {
  const [cartSubtotal, setCartSubtotal] = useState();
  const [cartTax, setCartTax] = useState();
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    let amount = 0;
    cartList.map((item) => {
      amount += item.price;
    });

    setCartSubtotal(amount.toFixed(2));
    setCartTax((amount * 0.055).toFixed(2));
    setCartTotal((amount * 1.055).toFixed(2));
  }, [cartList]);

  return (
    <main>
      {cartList.length === 0 && (
        <section className={styles.emptyCart}>
          <h2>Your cart is empty!</h2>
          <p>Time to do some shopping.</p>

          <Link to="/shop">
            <button className="primaryBtn">Shop now</button>
          </Link>
        </section>
      )}
      {cartList.length > 0 && (
        <div className={styles.cartPage}>
          <section className={styles.cartDetails}>
            <h2>Your cart</h2>
            <p>
              <span>Subtotal:</span>
              <span>{cartSubtotal}</span>
            </p>
            <p>
              <span>Taxes:</span> <span>{cartTax}</span>
            </p>
            <hr />
            <p>
              <span className={styles.total}>Total:</span>{" "}
              <span className={styles.total}>{cartTotal}</span>
            </p>

            <button className={`primaryBtn ${styles.checkoutBtn}`}>
              Checkout
            </button>
          </section>
          <section className={styles.cartList}>
            <h1>Items</h1>
          </section>
        </div>
      )}
    </main>
  );
};

export default Cart;
