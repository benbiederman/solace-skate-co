import styles from "./Home.module.scss";
import heroImg from "../../images/hero-img.png";
import deck from "../../images/product/krispy-kleen-deck.png";

const Home = () => {
  return (
    <main>
      <section className={styles.hero}>
        <img src={heroImg} />
        <div>
          <h2>
            It's time to <span>make</span> skate the donuts.
          </h2>
          <button>Shop now</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
