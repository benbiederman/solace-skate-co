import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShoppingSection from "../../components/ShoppingSection/ShoppingSection";
import Decks from "../../data/Decks";
import Tees from "../../data/Tees";
import Hoodies from "../../data/Hoodies";
import ShoppingSectionHeader from "../../components/ShoppingSectionHeader/ShoppingSectionheader";

const Shop = () => {
  const { state } = useLocation();

  const [items, setItems] = useState(Decks);
  const [category, setCategory] = useState(state ? state : "Decks");

  useEffect(() => {
    updateCategory(state);
  }, []);

  useEffect(() => {
    updateCategory(category);
  }, [category]);

  function updateCategory(exp) {
    switch (exp) {
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
  }

  const changeCategory = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setCategory(e.target.innerText);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main">
      <ShoppingSectionHeader
        changeCategory={changeCategory}
        category={category}
      />
      <ShoppingSection
        filteredData={items}
        showAllData={true}
        category={category}
      />
    </main>
  );
};

export default Shop;
