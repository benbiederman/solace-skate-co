import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./ShoppingSection.module.scss";
import Tees from "../../data/Tees";
import Decks from "../../data/Decks";
import ShoppingSectionItem from "../ShoppingSectionItem/ShoppingSectionItem";
import { Link } from "react-router-dom";

const ShoppingSection = ({
  header,
  allData,
  filteredData,
  showAllData,
  cta = false,
}) => {
  const shopOptions = filteredData;

  return (
    <section className={styles.shopSection}>
      {header && <h3>{header}</h3>}
      <div>
        {shopOptions &&
          showAllData &&
          shopOptions.map((item) => {
            return item.variation.map((i) => {
              return (
                <ShoppingSectionItem
                  item={item}
                  data={i}
                  showAllData={true}
                  key={i.id}
                />
              );
            });
          })}
        {shopOptions &&
          !showAllData &&
          shopOptions.map((item) => {
            return (
              <ShoppingSectionItem
                item={item}
                data={item.variation[0]}
                showAllData={false}
                key={item.variation[0].id}
              />
            );
          })}
      </div>
      {cta && (
        <Link
          to="/shop"
          state={allData}
          role="Button"
          className="primaryBtn"
          aria-label={`Shop all ${header} button`}
        >
          Shop all {header}
        </Link>
      )}
    </section>
  );
};

export default ShoppingSection;
