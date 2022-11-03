import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Shop from "./Shop";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
