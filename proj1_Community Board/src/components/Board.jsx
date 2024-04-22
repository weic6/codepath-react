// components/Board.jsx
import React from "react";
import Card from "./Card";

const Board = (props) => {
  const trucks = [
    {
      truck_name: "Birri-Landia",
      type: "Mexican",
      img: "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg",
      link: "https://www.google.com",
    },
    {
      truck_name: "Mysttik Masala",
      type: "Indian",
      img: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42",
      link: "https://www.google.com",
    },
    {
      truck_name: "The Halal Guys",
      type: "Middle Eastern",
      img: "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024",
      link: "https://www.google.com",
    },
  ];
  return (
    <>
      <div className="Board">
        <h1 className="Board-title">{props.title}</h1>
        <div className="Board-cards">
          {trucks.map((truck) => {
            return (
              <Card
                truck_name={truck.truck_name}
                type={truck.type}
                img={truck.img}
                url={truck.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Board;
