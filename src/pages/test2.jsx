import React from "react";

// import "./Player.css";


// Destructuring props in the function arguments.

const Player = ({ allPlayers, name, yearsPro, position, removePlayer }) => {

    const handleRemove = () => {

    const filteredPlayers = allPlayers.filter((player) => player.name !== name);

    removePlayer(filteredPlayers);

  };


  return (

    <span onClick={handleRemove}>

      {name} ({position}) | Years pro: {yearsPro}

    </span>

  );

};


export default Player;