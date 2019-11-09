import React from "react";
import PlayerCard from "./PlayerCard.js";

const PlayerList = props => {
  // let's build this out
  // needs `players` prop to map over and return PLayerCar
  console.log("PROPS: ", props.players);
  return (
    <div>
      <h2>List of Soccer Players and Selected Stats</h2>
      {props.players.map((player, key) => {
        return (
          <PlayerCard
            key={player.id}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        );
      })}
    </div>
  );
};

export default PlayerList;
