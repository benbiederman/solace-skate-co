import styles from "./HomepageHero.module.scss";

const HomepageHero = (props) => {
  return (
    <section className={styles.hero}>
      <img src={props.img} alt={props.altText} />
      <div>
        <h2>{props.heading}</h2>
        <button className="primaryBtn">{props.cta}</button>
      </div>
    </section>
  );
};

export default HomepageHero;
