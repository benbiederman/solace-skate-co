import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingSection from "../ShoppingSection/ShoppingSection";
import styles from "./ItemPage.module.scss";
import allProducts from "../../data/AllProducts";

import { v4 as uuidv4 } from "uuid";

const ItemPage = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.state.item);
  const [inventory, setInventory] = useState(activeItem.inventory);
  const [activeSize, setActiveSize] = useState();
  const [sizeWarning, setSizeWarning] = useState(false);
  const [itemData, setItemData] = useState(location.state.allData);
  const [variations, setVariations] = useState(location.state.variations);
  const [category, setCategory] = useState(location.state.category);
  const [productSuggestion, setProductSuggestion] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setItemData(location.state.allData);
    setCategory(location.state.category);
    setVariations(location.state.variations);
    setCategory(location.state.category);
    setInventory(activeItem.inventory);
    setActiveItem(location.state.item);
    setSizeWarning(false);
    setActiveSize();
  }, [location]);

  useEffect(() => {
    setProductSuggestion([]);
    setSuggestions(allProducts);
    setInventory(activeItem.inventory);
  }, [itemData]);

  useEffect(() => {
    setInventory(activeItem.inventory);
  }, [activeItem]);

  const setSuggestions = (productArr) => {
    let products = [...productArr];
    let filteredAmount = window.innerWidth < 1024 ? 4 : 5;
    let i = 0;

    while (i < filteredAmount) {
      const randomNumber = Math.floor(Math.random() * products.length);
      let randomProduct = products.splice(randomNumber, 1)[0];

      if (randomProduct.name !== itemData.name) {
        setProductSuggestion((prevState) => [...prevState, randomProduct]);
        i++;
      }
    }
  };

  function selectSize(e) {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      setActiveSize(e.target.innerText.toLowerCase());
    }
  }

  function addToCart(e) {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (!activeSize) {
        console.log(e);
        setSizeWarning(true);
      }
    }
  }

  return (
    <main>
      <Link
        to="/shop"
        state={itemData.category}
        className={`secondaryBtn ${styles.backBtn}`}
      >
        <p>Back to {itemData.category}</p>
      </Link>
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
                    onClick={() => setActiveItem(option)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setActiveItem(option);
                      }
                    }}
                  />
                );
              })}
          </div>
          {/* Sizing Options */}
          {sizeWarning && (
            <div className={styles.sizeWarning}>
              <p>Please select a size</p>
            </div>
          )}
          <div
            className={!sizeWarning ? styles.itemSizing : styles.itemWarning}
          >
            {inventory.map((option) => {
              return (
                <div
                  key={uuidv4()}
                  tabIndex={option.quantity > 0 ? 0 : -1}
                  className={
                    `${styles.size} ` +
                    (option.quantity > 0
                      ? `${styles.sizeAvailable}`
                      : `${styles.sizeUnavailable}`) +
                    ` ` +
                    (activeSize == option.size ? `${styles.activeSize}` : "")
                  }
                  onKeyDown={selectSize}
                  onClick={selectSize}
                >
                  <p>{option.size}</p>
                </div>
              );
            })}
          </div>
          {activeSize && activeSize < 5 && (
            <p className={styles.fomo}>Only X left! Don't miss out!</p>
          )}
          <button
            onKeyDown={addToCart}
            onClick={addToCart}
            className={`${styles.cartBtn} primaryBtn`}
          >
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
      <hr></hr>
      {/* Item Suggestions */}
      <ShoppingSection
        header={"You may also like"}
        category={category}
        filteredData={productSuggestion}
      />
    </main>
  );
};

export default ItemPage;
