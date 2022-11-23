import styles from "./HomepageHero.module.scss";
import { Link } from "react-router-dom";

const HomepageHero = (props) => {
  return (
    <section className={styles.hero}>
      <img src={props.img} alt={props.altText} />
      <div>
        <h2>{props.heading}</h2>
        <Link to="/shop" className="primaryBtn" aria-label={`Shop now button`}>
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default HomepageHero;
