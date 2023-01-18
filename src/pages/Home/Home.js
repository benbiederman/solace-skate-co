import styles from "./Home.module.scss";
import heroImg from "../../images/hero-img.png";
import HomepageHero from "../../components/HomepageHero/HomepageHero";
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection";
import Tees from "../../data/Tees";
import Decks from "../../data/Decks";
import { useEffect, useState } from "react";
import TeamSection from "../../components/TeamSection/TeamSection";

const Home = () => {
  const [tees, setTees] = useState();
  const [decks, setDecks] = useState();

  useEffect(() => {
    shoppingItems(Tees, setTees);
    shoppingItems(Decks, setDecks);
  }, []);

  // Make amount of items fit the space depending on mobile/tablet or desktop
  function shoppingItems(arr, state) {
    let numOfItems = window.innerWidth < 1024 ? 4 : 5;
    if (arr < numOfItems) {
      state(arr);
    } else {
      let allItems = [...arr];
      let filteredItems = [];

      for (let i = 0; i < numOfItems; i++) {
        filteredItems.push(allItems.splice(allItems[i], 1)[0]);
      }
      state(filteredItems);
    }
  }

  return (
    <main id="main">
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
      <ShoppingSection
        header="Tees"
        category="Tees"
        allData={Tees}
        filteredData={tees}
        cta={true}
      />
      <TeamSection />
    </main>
  );
};

export default Home;
