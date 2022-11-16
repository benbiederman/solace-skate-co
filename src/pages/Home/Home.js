import styles from "./Home.module.scss";
import heroImg from "../../images/hero-img.png";
import HomepageHero from "../../components/HomepageHero/HomepageHero";
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection";

const Home = () => {
  return (
    <main>
      <HomepageHero
        img={heroImg}
        alt={
          "Chance noseblunting a skateboarding box, next to the new Solace Skate Co. skateboard graphic."
        }
        heading={
          <>
            It's time to <span>make</span> skate the donuts.
          </>
        }
        cta={"Shop now"}
      />
      <ShoppingSection header="Apparel" category="apparel" allItems={false} />
    </main>
  );
};

export default Home;
