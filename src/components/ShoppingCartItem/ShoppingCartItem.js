import { useState } from "react";
import { useEffect } from "react";
import styles from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ data, removeItem, updateQuantity }) => {
  const [inventoryUnavailable, setInventoryUnavailable] = useState(false);

  function changeQuantity(e, id) {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      e.preventDefault();
      if (data.totalAvailable === data.quantity && e.target.innerText === "+") {
        setInventoryUnavailable(true);
        return;
      }
      if (data.totalAvailable === data.quantity && e.target.innerText === "-") {
        setInventoryUnavailable(false);
      }

      updateQuantity(e, id);
    }
  }

  return (
    <section className={styles.cartItem}>
      <div className={styles.itemImg}>
        <figure>
          <img src={data.img} alt={data.alt} />
        </figure>
      </div>
      <div className={styles.itemInfo}>
        <h3>{data.name}</h3>
        {data.color ? (
          <p>
            {data.color} | {data.size}
          </p>
        ) : (
          <p>{data.size}</p>
        )}
        <p>${data.price}</p>
      </div>
      <div className={styles.cartInfo}>
        {data.quantity === 1 ? (
          <button
            className={styles.removeBtn}
            onKeyDown={(e) => removeItem(e, data.id)}
            onClick={(e) => removeItem(e, data.id)}
          >
            x
          </button>
        ) : (
          <button
            className={styles.itemBtn}
            onKeyDown={(e) => changeQuantity(e, data.id)}
            onClick={(e) => changeQuantity(e, data.id)}
          >
            -
          </button>
        )}
        <input value={data.quantity} readOnly={true} />
        <button
          className={styles.itemBtn}
          onKeyDown={(e) => changeQuantity(e, data.id)}
          onClick={(e) => changeQuantity(e, data.id)}
        >
          +
        </button>
      </div>
      {inventoryUnavailable && (
        <div className={styles.disclaimer}>
          <p>
            Sorry, you cannot add anymore of this size, you have our remaining
            stock in your cart!
          </p>
        </div>
      )}
    </section>
  );
};

export default ShoppingCartItem;
