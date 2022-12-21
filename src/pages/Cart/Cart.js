import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";

const Cart = ({ cartList }) => {
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
    </main>
  );
};

export default Cart;
