import styles from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.cartItem} tabIndex={0}>
      <figure>
        <img src={data.img} alt={data.alt} />
      </figure>
      <div className={styles.productInfo}>
        <h3>{data.name}</h3>
        <p>
          {data.color} | {data.size}
        </p>
        <p>{data.price}</p>
      </div>
      <div className={styles.counter}>
        <button>-</button>
        <p>{data.quantity}</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
