// Components/baristaForm.jsx
import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";

const BaristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});
  const [correct_temp, setCheckedTemp] = useState("");
  const [correct_syrup, setCheckedSyrup] = useState("");
  const [correct_milk, setCheckedMilk] = useState("");
  const [correct_blended, setCheckedBlended] = useState("");
  const onNewDrink = () => {
    setCheckedTemp("");
    setCheckedSyrup("");
    setCheckedMilk("");
    setCheckedBlended("");
    setInputs({ temp: "", milk: "", syrup: "", blended: "" });
    getNextDrink();
  };
  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs["temp"]) {
      setCheckedTemp("wrong");
    } else {
      setCheckedTemp("correct");
    }
    if (trueRecipe.syrup != inputs["syrup"]) {
      setCheckedSyrup("wrong");
    } else {
      setCheckedSyrup("correct");
    }
    if (trueRecipe.milk != inputs["milk"]) {
      setCheckedMilk("wrong");
    } else {
      setCheckedMilk("correct");
    }
    if (trueRecipe.blended != inputs["blended"]) {
      setCheckedBlended("wrong");
    } else {
      setCheckedBlended("correct");
    }
  };
  const [inputs, setInputs] = useState({
    temp: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const ingredients = {
    temp: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };

  const handleChange = (e) => {
    setInputs((prevState) => {
      // console.log("Current state before update:", prevState);
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  const getCorrectnessId = (key) => {
    switch (key) {
      case "temp":
        return correct_temp;
      case "syrup":
        return correct_syrup;
      case "milk":
        return correct_milk;
      case "blended":
        return correct_blended;
      default:
        return ""; // default fallback if no match
    }
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>
      <form className="container">
        {Object.keys(ingredients).map((key) => (
          <div key={key}>
            <div className="mini-container">
              <h3>{key}</h3>
              <div className="answer-space" id={getCorrectnessId(key)}>
                {inputs[key]}
              </div>
              <RecipeChoices
                handleChange={handleChange}
                label={key}
                choices={ingredients[key]}
                currentVal={inputs[key]}
              />
            </div>
          </div>
        ))}
      </form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button
        type="new-drink-button" //是不是应该是type="button"???
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drinks
      </button>
    </div>
  );
};

export default BaristaForm;
