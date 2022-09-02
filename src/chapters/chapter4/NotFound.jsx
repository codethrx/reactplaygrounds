import React from "react";
import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Not found" });
      //   navigate(-1); //going back -1 one page -2 2pages
    }, 2000);
  }, []);
  return <div>NotFound</div>;
  //   return <Navigate to="/" />;
}

export default NotFound;
