import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./ShoppingSection.module.scss";
import Apparel from "../../data/Apparel";
import Decks from "../../data/Decks";
import ShoppingSectionItem from "../ShoppingSectionItem/ShoppingSectionItem";

const ShoppingSection = (props) => {
  const [shopOptions, setShopOptions] = useState();
  useEffect(() => {
    switch (props.category.toLowerCase()) {
      case "apparel":
        setShopOptions(Apparel);
        break;
      case "decks":
        setShopOptions(Decks);
        break;
      default:
        setShopOptions(null);
        break;
    }
  }, []);

  return (
    <section className={styles.shopSection}>
      {props.header && <h3>{props.header}</h3>}
      <div>
        {shopOptions &&
          props.allItems &&
          shopOptions.map((item) => {
            return item.variation.map((i) => {
              return (
                <ShoppingSectionItem
                  item={item}
                  data={i}
                  allItems={true}
                  key={i.id}
                />
              );
            });
          })}
        {shopOptions &&
          !props.allItems &&
          shopOptions.map((item) => {
            return (
              <ShoppingSectionItem
                item={item}
                data={item.variation[0]}
                allItems={false}
                key={item.variation[0].id}
              />
            );
          })}
      </div>
      <button className="primaryBtn">Shop all {props.category}</button>
    </section>
  );
};

export default ShoppingSection;
