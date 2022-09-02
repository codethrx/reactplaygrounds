import React from "react";
//components
import Game from "./components/Game";
import GameInput from "./components/GameInput";
//utils
import { typeConverter } from "./utils/typeConverter";
import { v4 as uuidv4, v4 } from "uuid";
function Chapter1() {
  //state
  const [formData, setFormData] = React.useState({ name: "", rating: "0" });
  const [games, setGames] = React.useState([]);
  console.log(games);
  //event handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: typeConverter(e.target.type, e.target.value),
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGames([...games, { ...formData, id: v4() }]);
  };
  const handleDeleteGame = (id) => {
    setGames(games.filter((g) => g.id !== id));
  };
  //data
  // const games = [
  //   { name: "COD:MW2", rating: 10, id: 0 },
  //   { name: "Cyber Punk", rating: 9.77, id: 1 },
  // ];
  const mappedGames = games.map((game) => (
    <Game {...game} key={game.id} handleDeleteGame={handleDeleteGame} />
  ));
  return (
    <div>
      <h1>Component , JSX , Props</h1>
      <GameInput
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
      />
      {games.length >= 1 ? mappedGames : `There are no games. Add games.`}
    </div>
  );
}

export default Chapter1;
