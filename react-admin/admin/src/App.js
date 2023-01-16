import "./styles/bootstraps.min.css";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";

function App() {
  const [offMenu, setOffMenu] = useState(false);
  const toggleOffMenu = () => setOffMenu(!offMenu);

  return (
    <>
      <Navbar toggleOffMenu={toggleOffMenu} />
      <div className="main-wrapper">
        <div className={`off-menu ${offMenu && `show`} bg-dark`}>test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route exacth path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
