//components/Card.jsx
import React from "react";
import { useState } from "react";

const Card = ({ id, question, answer, url }) => {
  const [flip, setFlip] = useState("");
  const handleClick = () => {
    setFlip(flip === "" ? "flipped" : "");
  };
  return (
    <div className={"card " + flip} id={id} onClick={handleClick}>
      <div className="front">{question}</div>
      <div className="back">
        <img src={url} alt="" style={{ width: "100px", height: "auto" }} />
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default Card;
