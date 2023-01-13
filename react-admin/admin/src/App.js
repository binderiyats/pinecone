import "./styles/bootstraps.min.css";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { useState } from "react";

function App() {
  const [offMenu, setOffMenu] = useState(false);
  const toggleOffMenu = () => setOffMenu(!offMenu);

  return (
    <>
      <Navbar toggleOffMenu={toggleOffMenu} />
      <div className="main-wrapper">
        <div className={`off-menu ${offMenu && `show`} bg-dark`}>test</div>
        <div className="off-menu-sibling">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
