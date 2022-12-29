import styles from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ data }) => {
  console.log(data);
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
          <button className={styles.removeBtn}>x</button>
        ) : (
          <button className={styles.itemBtn}>-</button>
        )}
        <input value={data.quantity} readOnly={true} />
        <button className={styles.itemBtn}>+</button>
      </div>
    </section>
  );
};

export default ShoppingCartItem;
