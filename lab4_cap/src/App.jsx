import { useState } from "react";
import "./App.css";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import APIForm from "./components/APIForm";
import Gallery from "./components/Gallery";
function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });
  const [currentImage, setCurrentImage] = useState(null);
  const [prevImages, setPrevImages] = useState([]);
  const [quota, setQuota] = useState(null);

  const submitForm = () => {
    // console.log("click submit form");
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    if (inputs.url === "") {
      alert("You forgot to submit an url!");
    } else {
      for (const [key, value] of Object.entries(inputs)) {
        if (value == "") {
          inputs[key] = defaultValues[key];
        }
      }
    }
    makeQuery();
  };

  /**
   * assemble Input values into the right query string format that our API call needs.
   */
  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;
    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;

    callAPI(query).catch(console.error); //callAPI(query) return a promise. if the promise is rejected (meaning an error has occurred), .catch() is triggered, and it executes a callback function (console.error) to handle the error.
  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    if (json.url == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      setCurrentImage(json.url);
      setPrevImages((prevImages) => [...prevImages, json.url]);
      // reset();
      getQuota();
    }
  };

  const getQuota = async () => {
    let query = `https://api.apiflash.com/v1/urltoimage/quota?access_key=${ACCESS_KEY}`;
    console.log(query);
    const response = await fetch(query);
    const json = await response.json();
    setQuota(json);
  };

  const reset = () => {
    setInputs({
      url: "",
      format: "",
      no_ads: "",
      no_cookie_banners: "",
      width: "",
      height: "",
    });
  };
  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      {/* {quota && (
        <h2 className="quota">
          limit: {quota.limit}, remaining: {quota.remaining}
        </h2>
      )} */}

      {/* or use: */}
      {quota ? (
        <p className="quota">
          Remaining API calls: {quota.remaining} out of {quota.limit}
        </p>
      ) : (
        <p></p>
      )}
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value.trim(),
          })
        }
        onSubmit={submitForm}
      />
      <br />
      {currentImage ? (
        <img
          src={currentImage}
          alt="Screenshot returned"
          className="screenshot"
          width="300"
        />
      ) : (
        <div></div>
      )}
      <div className="container">
        <h3> Current Query Status: </h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
          <br></br>
          &url={inputs.url} <br></br>
          &format={inputs.format} <br></br>
          &width={inputs.width}
          <br></br>
          &height={inputs.height}
          <br></br>
          &no_cookie_banners={inputs.no_cookie_banners}
          <br></br>
          &no_ads={inputs.no_ads}
          <br></br>
          <Gallery images={prevImages} />
        </p>
      </div>
    </div>
  );
}

export default App;

// 知识点1:update inputs:
// (e) =>  setInputs({
//   ...inputs,
//   [e.target.name]: e.target.value.trim(),
// })

// 知识点2: when dealing with userinput, better to use trim() to removes whitespace from both ends. e.g. "   Hello world!   " -> "Hello world!"

//知识点 3: callAPI(query).catch(console.error); //Here, callAPI(query) return a promise. if the promise is rejected (meaning an error has occurred), .catch() is triggered, and it executes a callback function (console.error) to handle the error.
