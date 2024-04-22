import React from "react";
import Event from "./Event";

const Calendar = () => {
  const times = [
    "8 am",
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
  ];

  const days = [
    "",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            {days.map((day) => {
              return <th key={day}>{day}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Starbucks ☕️" color="green" location="Maple & Ash" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" color="pink" />
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="blue" />
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="Millennium Park 🌳" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Skydeck Chicago 🏙" color="blue" />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Starbucks ☕️" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
