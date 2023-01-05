import "./styles/bootstraps.min.css";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import DynamicModals from "./components/utilities/DynamicModals";
import { useState } from "react";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
