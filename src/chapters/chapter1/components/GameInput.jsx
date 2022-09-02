import React from "react";

function GameInput({ formData, handleInputChange, handleFormSubmit }) {
  const { name, rating } = formData;
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Game Name..."
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        value={rating || 0}
        onChange={handleInputChange}
      />
      <button onClick={handleFormSubmit}>Submit...</button>
    </form>
  );
}

export default GameInput;
