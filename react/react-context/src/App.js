import { createContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Switch from "./utils/Switch.jsx";

export const ThemeContext = createContext("");

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={"wrapper " + theme}>
        <button
          className="dark-mode-toggle toggler"
          aria-hidden="true"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <Switch />
        </button>

        <h1>My blog</h1>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
