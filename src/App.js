import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Shop from "./pages/Shop/Shop";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ItemPage from "./components/ItemPage/ItemPage";

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
