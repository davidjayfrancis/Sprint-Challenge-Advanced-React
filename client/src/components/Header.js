import React from "react";
import PlayerList from "./PlayerList";
import { useDarkMode } from "./hooks/useDarkMode.js";

const Header = () => {
  const [darkValue, toggleDarkMode] = useDarkMode();

  return (
    <div className="header">
      <h1>World Soccer Stats</h1>
      <button onClick={toggleDarkMode}>Toggle Darkmode</button>
    </div>
  );
};

export default Header;
