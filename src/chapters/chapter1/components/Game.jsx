import React from "react";

function Game({ name, rating, id, handleDeleteGame }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>rating:{rating}</p>
      <button
        onClick={() => {
          handleDeleteGame(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Game;
