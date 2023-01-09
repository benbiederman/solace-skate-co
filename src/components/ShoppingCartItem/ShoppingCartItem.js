import { useState } from "react";
import { useEffect } from "react";
import styles from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ data, removeItem, updateQuantity }) => {
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
            onKeyDown={(e) => updateQuantity(e, data.id)}
            onClick={(e) => updateQuantity(e, data.id)}
          >
            -
          </button>
        )}
        <input value={data.quantity} readOnly={true} />
        <button
          className={styles.itemBtn}
          onKeyDown={(e) => updateQuantity(e, data.id)}
          onClick={(e) => updateQuantity(e, data.id)}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default ShoppingCartItem;
