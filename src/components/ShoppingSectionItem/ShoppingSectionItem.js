import { Link } from "react-router-dom";
import styles from "./ShoppingSectionItem.module.scss";

const ShoppingSectionItem = ({ item, data }) => {
  const name = data.name;
  const url = data.name.replaceAll(" ", "-").toLowerCase();
  const variation = data.variation;

  return (
    <Link
      to={`/shop/${url}`}
      state={{ allData: data, item: item, variations: variation }}
      className={styles.shoppingSectionItem}
      tabIndex={0}
    >
      {item.sale && <p className={styles.saleTag}>Sale</p>}
      <figure>
        <img src={item.img} alt={item.alt} />
      </figure>
      <h4>{name}</h4>
      {item.sale ? (
        <p>
          <span className="sale">${item.price}</span>{" "}
          <span className="salePrice">${item.salePrice}</span>
        </p>
      ) : (
        <p>${item.price}</p>
      )}
    </Link>
  );
};

export default ShoppingSectionItem;
