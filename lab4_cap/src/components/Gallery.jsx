import React from "react";
import { useState } from "react";

const Gallery = ({ images }) => {
  return (
    <div>
      <h2> Your Screenshot Gallery!</h2>
      <dir className="image-container">
        {images && images.length > 0 ? (
          images.map((pic, index) => (
            <li className="gallery" key={index}>
              <img
                className="gallery-screenshot"
                src={pic}
                key={index}
                width="300"
              ></img>
            </li>
          ))
        ) : (
          <div>
            <h3>You haven't made a screenshot yet!</h3>
          </div>
        )}
      </dir>
    </div>
  );
};

export default Gallery;
