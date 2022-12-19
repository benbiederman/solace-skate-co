import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Shop from "./pages/Shop/Shop";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ItemPage from "./components/ItemPage/ItemPage";
import Cart from "./pages/Cart/Cart";

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <Router>
      <div>
        <Navigation cartList={cartList} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:url" element={<ItemPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
