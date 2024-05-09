import { useState } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [currentImg, setCurimg] = useState(null);
  const [prevImages, setPrevImages] = useState([]);

  const makeQuery = async () => {
    let query = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;
    console.log(query);
    try {
      let response = await fetch(query);
      let json = await response.json();
      // console.log(json[0]);
      let image = json[0].url;
      setCurimg(image);
      setPrevImages((prevImages) => [...prevImages, image]);
    } catch (error) {
      console.error("Failed to fetch cat image:", error);
    }
  };
  return (
    <>
      <div className="whole-page">
        <h1>Trippin' on Cats</h1>
        <p>Discover cats from your wildest dreams!</p> <p>😺😸😹😻😼😽🙀😿😾</p>
        <br />
        <br />
        <div className="discover-container">
          {currentImg && (
            <div>
              <img
                src={currentImg}
                className="cat-pic"
                alt="Cat pics from API call"
                height="250px"
                width="250px"
              />
            </div>
          )}
          <br />
          <button type="discover" className="discover-btn" onClick={makeQuery}>
            🔀 Discover!
          </button>
        </div>
      </div>
      <div className="history-sidebar">
        <h2>Who have we seen so far?</h2>
        <div className="history-container">
          {prevImages && prevImages.length > 0 ? (
            prevImages.map((img, index) => (
              <li className="cat-pic" key={index} height="50" width="50">
                <img
                  src={img}
                  alt="random image from Cat API"
                  width="50px"
                  height="50px"
                />
              </li>
            ))
          ) : (
            <div>There is no pic</div>
          )}
        </div>
      </div>
      <div className="sideNav">
        <h2>Ban List</h2>
        <p>Select an attribute in your listing to ban it</p>
      </div>
    </>
  );
}

export default App;
