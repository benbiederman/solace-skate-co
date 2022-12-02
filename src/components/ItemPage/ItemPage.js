import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ItemPage.module.scss";

const ItemPage = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.state.item);
  const [inventory, setInventory] = useState(activeItem.inventory);
  const [activeSize, setActiveSize] = useState(7);

  const itemData = location.state.allData;
  const variations = location.state.variations;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(inventory);

  return (
    <main>
      <section className={styles.itemPage}>
        {/* Main Product Info */}
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
          {/* Item Options */}
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
          {/* Sizing Options */}
          <div className={styles.itemSizing}>
            {inventory.map((option) => {
              return (
                <div
                  tabIndex={option.quantity > 0 ? 0 : -1}
                  className={
                    option.quantity > 0
                      ? styles.sizeAvailable
                      : styles.sizeUnavailable
                  }
                >
                  <p>{option.size}</p>
                </div>
              );
            })}
          </div>
          {activeSize && activeSize < 5 && (
            <p className={styles.fomo}>Only X left! Don't miss out!</p>
          )}
          <button className={`${styles.cartBtn} primaryBtn`}>
            Add to cart
          </button>
          {/* Add to Cart Button */}
        </div>
        {/* Main Product Image */}
        <div className={styles.itemImg}>
          <figure>
            <img src={activeItem.img} alt={activeItem.alt} />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ItemPage;
