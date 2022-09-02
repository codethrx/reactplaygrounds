import React from "react";
import { Link, Outlet } from "react-router-dom";
function GameLayout() {
  return (
    <div>
      <Link to="/games/699">1</Link>
      <Link to="/games/700">2</Link>
      <Outlet />
    </div>
  );
}

export default GameLayout;
