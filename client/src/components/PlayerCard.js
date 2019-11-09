import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Country: {props.country}</p>
      <p>Searches: {props.searches}</p>
    </div>
  );
};

export default PlayerCard;
