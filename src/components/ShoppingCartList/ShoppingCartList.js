import styles from "./ShoppingCartList.module.scss";

const ShoppingCartList = ({ cartList }) => {
  return (
    <div className={styles.cartList}>
      {cartList.map((item) => {
        return <p>Need item component</p>;
      })}
    </div>
  );
};

export default ShoppingCartList;
