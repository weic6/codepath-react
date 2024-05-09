// Components/RecipeChoices.jsx

import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, currentVal }) => {
  return (
    <div className="radio-buttons">
      {choices &&
        choices.map((choice) => (
          <li key={choice}>
            <input
              id={choice}
              value={choice}
              name={label}
              type="radio"
              onChange={handleChange}
              checked={currentVal == choice}
            />
            {choice}
          </li>
        ))}
    </div>
  );
};

export default RecipeChoices;
