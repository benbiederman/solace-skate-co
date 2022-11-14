import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./ShoppingSection.module.scss";
import { v4 as uuidv4 } from "uuid";

const ShoppingSection = (props) => {
  return (
    <section className={styles.shopSection}>
      {props.header && <h3>{props.header}</h3>}
      <div></div>
    </section>
  );
};

export default ShoppingSection;
