import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection";
import Decks from "../../data/Decks";
import Tees from "../../data/Tees";
import Hoodies from "../../data/Hoodies";

const Shop = () => {
  const { state } = useLocation();

  const [items, setItems] = useState(Decks);
  const [category, setCategory] = useState(state ? state : "Decks");

  useEffect(() => {
    switch (state) {
      case "Tees":
        setItems(Tees);
        break;
      case "Hoodies":
        setItems(Hoodies);
        break;
      case "Decks":
        setItems(Decks);
        break;
      default:
        setItems(Decks);
        break;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ShoppingSection
        filteredData={items}
        showAllData={true}
        category={category}
      />
    </main>
  );
};

export default Shop;
