import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Shop from "./pages/Shop/Shop";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ItemPage from "./pages/ItemPage/ItemPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Cart from "./pages/Cart/Cart";

function App() {
  const [cartList, setCartList] = useState([]);

  function addToCart(productName, productInfo, productSize, totalQuantity) {
    let item = {
      name: productName,
      img: productInfo.img,
      alt: productInfo.alt,
      size: productSize,
      color: productInfo.color,
      price: productInfo.price,
      salePrice: productInfo.salePrice,
      quantity: 1,
      totalAvailable: totalQuantity,
      id: `${productInfo.id}-${productSize}`,
    };

    setCartList((prevState) => [...prevState, item]);
  }

  function removeItem(e, id) {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      e.preventDefault();
      setCartList(
        cartList.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  function updateQuantity(e, id) {
    let updateList = [...cartList];
    updateList.map((item) => {
      if (item.id === id && e.target.innerText === "+") {
        item.quantity += 1;
      }
      if (item.id === id && e.target.innerText === "-") {
        item.quantity -= 1;
      }
      setCartList(updateList);
    });
  }

  return (
    <Router>
      <div>
        <Navigation cartList={cartList} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:url" element={<TeamPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/shop/:url"
              element={<ItemPage addToCart={addToCart} cartList={cartList} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartList={cartList}
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
