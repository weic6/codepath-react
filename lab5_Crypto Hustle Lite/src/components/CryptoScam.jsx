import React, { Component, useEffect, useState } from "react";

const CryptoScam = () => {
  const [scamList, setScamList] = useState(null);
  useEffect(() => {
    const queryScam = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const url = "https://api.cryptoscamdb.org/v1/featured";
      const res = await fetch(url, requestOptions);
      const json = res.json();
      setScamList(json);
    };
    queryScam().catch(console.error);
  }, []);

  return (
    <div>
      Here is a list of coins and platforms involved in recent crypto-related
      scams:
      <ul className="side-list">
        {scamList &&
          scamList.result.map((scam) => <li key={scam.name}>{scam.name}</li>)}
      </ul>
    </div>
  );
};

export default CryptoScam;
