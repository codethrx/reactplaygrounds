import React from "react";
import { useLocation } from "react-router-dom";
function Home() {
  const loc = useLocation();
  console.log(loc);
  return <div>Home</div>;
}

export default Home;
