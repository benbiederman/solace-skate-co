import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ItemPage.module.scss";

const ItemPage = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.state.item);
  const [inventory, setInventory] = useState(activeItem.inventory);

  const itemData = location.state.allData;
  const variations = location.state.variations;

  console.log(inventory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.itemPage}>
      <div className={styles.itemInfo}>
        <h2>{itemData.name}</h2>
        {activeItem.color && <p>{activeItem.color}</p>}
        {activeItem.sale ? (
          <p>
            <span className="sale">${activeItem.price}</span>{" "}
            <span className="salePrice">${activeItem.salePrice}</span>
          </p>
        ) : (
          <p>${activeItem.price}</p>
        )}
        <div className={styles.itemOptions}>
          {variations &&
            variations.map((option) => {
              return (
                <img
                  src={option.img}
                  alt={option.alt}
                  tabIndex={0}
                  key={option.id}
                />
              );
            })}
        </div>
      </div>
      <div className={styles.itemImg}>
        <figure>
          <img src={activeItem.img} alt={activeItem.alt} />
        </figure>
      </div>
    </main>
  );
};

export default ItemPage;
