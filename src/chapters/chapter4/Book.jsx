import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
function Book() {
  const { id } = useParams();
  const { hello } = useOutletContext();
  return (
    <div>
      {hello}-Book{id}
    </div>
  );
}

export default Book;
