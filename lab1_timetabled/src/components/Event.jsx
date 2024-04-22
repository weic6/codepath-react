import React from "react";
const Event = (props) => {
  return (
    <td className={"Event " + props.color}>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6>
    </td>
  );
};
export default Event;
//<td className={"Event " + props.color}>:   curly braces allow for JavaScript code to be evaluated within the HTML
