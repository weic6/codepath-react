// components/Card.jsx
import React from "react";

const Card = (props) => {
  const gotoMenu = () => {
    window.location.href = props.url;
  };
  return (
    <div className={"Card " + props.type}>
      <img src={props.img} alt="" />
      <h2>{props.truck_name}</h2>
      <h3>{props.type}</h3>

      <button onClick={gotoMenu}>View Menu</button>
    </div>
  );
};

export default Card;
