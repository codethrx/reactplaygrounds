import React from "react";
import {
  Routes,
  Route,
  useSearchParams,
  Link,
  useLocation,
} from "react-router-dom";
import Games from "./Games";
import Game from "./Game";
import GameLayout from "./GameLayout";

function GamesRoutes() {
  const [searchVal, setSearchVal] = useSearchParams({ game: 0 });
  const loc = useLocation();
  console.log(loc);
  const gameVal = searchVal.get("game");
  //   console.log(gameVal);

  return (
    <>
      {/* <Routes>
       <Route element={<Games />} index />
       <Route element={<Game />} path=":gameID" />
     </Routes> */}
      <Link to={`/games/${gameVal}`}>GameX</Link>
      <Routes>
        <Route element={<GameLayout />}>
          <Route element={<Games />} index />
          <Route element={<Game />} path=":id" />
        </Route>
      </Routes>
      <input
        type="number"
        value={gameVal}
        onChange={(e) => {
          setSearchVal({ game: e.target.value });
        }}
      />
    </>
  );
}

export default GamesRoutes;
