import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  function updateCount() {
    setCount(count + 1 * multiplier);
  }
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };
  const upgrades = [
    {
      id: 1,
      name: "Double Stuffed 👯‍♀️",
      cost: 10,
      multiplier: 2,
      description: "2x per click",
    },
    {
      id: 2,
      name: "Party Pack 🎉",
      cost: 100,
      multiplier: 5,
      description: "5x per click",
    },
    {
      id: 3,
      name: "Full Feast 👩🏽‍🍳",
      cost: 1000,
      multiplier: 10,
      description: "10x per click",
    },
  ];
  return (
    <div className="App">
      <div className="header">
        <h1> Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-samosa-1671395-1422401.png"
          className="samosa"
          onClick={updateCount}
        />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
