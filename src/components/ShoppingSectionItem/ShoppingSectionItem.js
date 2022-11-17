import styles from "./ShoppingSectionItem.module.scss";

const ShoppingSectionItem = ({ item, data }) => {
  const name = item.name;

  return (
    <article className={styles.shoppingSectionItem} tabIndex={0}>
      {data.sale && <p className={styles.saleTag}>Sale</p>}
      <figure>
        <img src={data.img} alt={data.alt} />
      </figure>
      <h4>{name}</h4>
      {data.sale ? (
        <p>
          <span className={styles.sale}>${data.price}</span>{" "}
          <span className={styles.salePrice}>${data.salePrice}</span>
        </p>
      ) : (
        <p>${data.price}</p>
      )}
    </article>
  );
};

export default ShoppingSectionItem;
