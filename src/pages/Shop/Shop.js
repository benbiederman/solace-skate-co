import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection";
import Decks from "../../data/Decks";

const Shop = () => {
  const { state } = useLocation();

  const [items, setItems] = useState(state ? state : Decks);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ShoppingSection filteredData={items} showAllData={true} />
    </main>
  );
};

export default Shop;
