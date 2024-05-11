//components/CoinInfo.jsx
import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getCoinPrice = async () => {
      let url = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();
      setPrice(json);
    };
    getCoinPrice().catch(console.error);
  }, [symbol]); //it will now run whenever the symbol we pass in changes. So every time we give a new coin symbol to get the info for, the useEffect() hook will run.
  return (
    <div>
      <ul>
        {price ? (
          <li className="main-list" key={symbol}>
            <img
              src={`https://www.cryptocompare.com${image}`}
              className="icons"
              alt={`Small icon for ${name} crypto coin`}
            />
            {name}
            <span className="tab"></span>${price.USD} USD
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default CoinInfo;
