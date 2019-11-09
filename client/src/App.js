import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import PlayerList from "./components/PlayerList.js";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <PlayerList />
      </div>
    );
  }
}

export default App;
