import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Shop from "./Shop";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
