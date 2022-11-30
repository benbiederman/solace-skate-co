import styles from "./ShoppingSection.module.scss";
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
                  data={item}
                  item={i}
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
                data={item}
                item={item.variation[0]}
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
