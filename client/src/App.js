import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import PlayerList from "./components/PlayerList.js";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  // Let's put the axios call here for now, and later we can
  // re-factor into a hook

  componentDidMount() {
    const getPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/players");
        this.setState({
          players: response.data
        });
        console.log(this.state.players[5]);
      } catch (error) {
        console.log(error);
      }
    };
    getPlayers();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
