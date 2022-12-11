import styles from "./ShoppingSectionHeader.module.scss";

const ShoppingSectionHeader = ({ changeCategory, category }) => {
  return (
    <div className={styles.shoppingSectionHeader}>
      <ul>
        <li
          className={category === "Decks" ? `${styles.activeItem}` : null}
          onClick={changeCategory}
          onKeyDown={changeCategory}
          tabIndex={0}
        >
          Decks
        </li>
        <li
          className={category === "Hoodies" ? `${styles.activeItem}` : null}
          onClick={changeCategory}
          onKeyDown={changeCategory}
          tabIndex={0}
        >
          Hoodies
        </li>
        <li
          className={category === "Tees" ? `${styles.activeItem}` : null}
          onClick={changeCategory}
          onKeyDown={changeCategory}
          tabIndex={0}
        >
          Tees
        </li>
      </ul>
    </div>
  );
};

export default ShoppingSectionHeader;
